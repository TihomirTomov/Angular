import { Component, OnInit, DoCheck} from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  isUserLoggedIn: boolean = false;
  username: string;
  constructor(
    public userService: UserService,
    private router: Router,
    public auth: Auth,
  ) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isAuth();
    this.isUserLoggedIn = true;
  }

  logout() {
    this.userService
      .logout()
      .subscribe(success => {
        if (success) {
          window.sessionStorage.clear();
          this.router.navigate(['/']);
        }
      })
  }
}
