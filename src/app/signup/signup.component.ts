import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../modals/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  addUser: User = new User();
  signup = new FormGroup({
    firstName: new FormControl('', [(Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"))]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [(Validators.required, Validators.email)]),
    mobile: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmPassword: new FormControl('', Validators.required)
  })
  gender = [{
    id: 1, value: 'male'
  },
  {
    id: 2, value: 'female'
  }]
  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  signupvalue(addUser: User) {
    localStorage.setItem('email', addUser.email);
    localStorage.setItem('password', addUser.password);
    localStorage.setItem('name', addUser.firstName);
    this.route.navigateByUrl('');
  }


}
