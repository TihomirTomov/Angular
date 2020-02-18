import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({username:  new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required]),
  rePassword: new FormControl('', [Validators.required])});

  constructor(private userService: UserService,private router: Router) { }
  ngOnInit() {
  }

  register() {

    if(this.form.get('password').value !== this.form.get('rePassword').value) {
     console.log('passwords dont match');    
    }
    
    this.userService

      .register(this.form.get('username').value, this.form.get('password').value)
      .subscribe(data => {
                
          this.router.navigate(['/login'])
      })
  }
}
