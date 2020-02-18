import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  alert: any = null;
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  authenticateUser(json) {
    window.sessionStorage.setItem('authToken', json.token);
    window.sessionStorage.setItem('username', json.user.username);
    window.sessionStorage.setItem('userId', json.user._id);
  }

  login() {

    this.userService
      .login(this.form.get('username').value, this.form.get('password').value)
      .subscribe(data => {     
          this.authenticateUser(data);
          this.router.navigate(['/catalog'])
      })
  }

}
