import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/users';

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUser(id: String): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUser(id: String, user: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteUser(id: String): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred: ' + error.error.message;
    } else {
      errorMessage = `Backend returned code ${error.status}: ${error.body.error}`;
    }
    return throwError(errorMessage);
  }
}
