import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private route: Router) { }

  ngOnInit() {
  }

  signin(value) {
    value.email == localStorage.getItem("email") && value.password == localStorage.getItem("password") ?
      this.route.navigateByUrl('/home') : value.email == 'admin@gmail.com' && value.password == 'admin' ? this.route.navigateByUrl('/home') : alert('invalid user')
  }
}
