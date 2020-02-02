import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppAuthenticationService } from '../app.authentication.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  constructor(
    private router: Router,
    private authenticationService: AppAuthenticationService,
    private alertService: AlertService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  login(loginForm: NgForm) {

    this.alertService.clear();

    if (loginForm.invalid) {
      return;
    }

    this.authenticationService.login(loginForm.value.username, loginForm.value.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
          this.alertService.error('Invalid Username or Password.');
        }
      );
  }
}
