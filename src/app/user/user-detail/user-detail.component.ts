import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userForm: FormGroup;
  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: [null],
      login: ['', Validators.required],
      phone: ['']
    });

    this.user = this.route.snapshot.queryParams as User;
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  onSubmit() {
    this.userService.getUsers().subscribe(_ => {
      this.router.navigate(['']);
    });
  }
}
