import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTService } from 'src/app/services/auth-t.service';

@Component({
  selector: 'app-signup-page-t',
  templateUrl: './signup-page-t.component.html',
  styleUrls: ['./signup-page-t.component.css'],
})
export class SignupPageTComponent implements OnInit {
  @ViewChild('fT', { static: false }) loginFormT: NgForm;

  constructor(private authTService: AuthTService, private router: Router) {}

  ngOnInit(): void {}

  handleLoginClick(): void {
    this.authTService.loginT('', '');
    //navigate to dashboard
    this.router.navigate(['pets']);
  }

  handleSubmitT(): void {
    if (this.loginFormT.form.status == 'VALID') {
      // if (
      //   this.authTService.loginT(
      //     this.loginFormT.value.email,
      //     this.loginFormT.value.password
      //   )
      // ) {
      //   this.router.navigate(['dashboard', '123']);
      //   this.loginFormT.reset();
      // }
      this.authTService
        .loginT(this.loginFormT.value.email, this.loginFormT.value.password)
        .subscribe((data: any) => {
          console.log('data from ob', data);
        });
    }
    // console.log(this.loginFormT.form);
    // console.log(this.loginFormT.value);
  }
}
