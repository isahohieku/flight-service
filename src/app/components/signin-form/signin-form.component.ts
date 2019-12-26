import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  signinForm: FormGroup;
  username: FormControl;
  password: FormControl;
  loginLoading: boolean;
  errorMessage: string;
  constructor(private auth: AuthService, private util: UtilService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.signinForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  login() {
    if (this.signinForm.valid) {
      const data = {
        username: this.username.value,
        password: this.password.value
      };

      this.loginLoading = true;
      this.errorMessage = '';

      this.auth.postMethod(data)
        .subscribe((res: any) => {
          this.util.setToken(res.token);
          this.util.setUserObject(res.data);
          this.auth.setLoginStatus(true);
          this.loginLoading = false;

          this.router.navigateByUrl('/app');
        }, e => {
          this.errorMessage = 'Wrong email or password';
          this.loginLoading = false;

          console.log(e);
        });

    }
  }

}
