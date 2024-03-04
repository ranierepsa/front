import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    public router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  openUserDetails(user: User) {
    let path = user != null ? `/users/${user.id}` : `/users/${null}`;
    this.router.navigate([path], { queryParams: user });
  }

  deleteUser(userId: any) {
    this.userService.deleteUser(userId).subscribe(_ => {
      window.location.reload();
    });
  }

}
