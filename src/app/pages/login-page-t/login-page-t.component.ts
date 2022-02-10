import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthTService } from 'src/app/services/auth-t.service';

@Component({
  selector: 'app-login-page-t',
  templateUrl: './login-page-t.component.html',
  styleUrls: ['./login-page-t.component.css'],
})
export class LoginPageTComponent implements OnInit {
  constructor(private authTService: AuthTService, private router: Router) {}

  ngOnInit(): void {}

  handleLoginClick(): void {
    this.authTService.loginT('', '');
    //navigate to dashboard
    this.router.navigate(['pets']);
  }
}
