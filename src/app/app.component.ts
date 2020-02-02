import { Component } from '@angular/core';
import { AppAuthenticationService } from './app.authentication.service';
import { User } from './models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-blog-app-ashutosh';
  currentUser: User;

  constructor(private router: Router, private appAuthenticationService: AppAuthenticationService) {
    this.appAuthenticationService.currentUser.subscribe(user => this.currentUser = user);
  }

  logout() {
    this.currentUser = null;
    this.appAuthenticationService.logout();
    this.router.navigate(['/login']);
  }
}
