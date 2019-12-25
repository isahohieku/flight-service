import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  signinForm: FormGroup;
  username: FormControl;
  password: FormControl;
  constructor() { }

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

      // this.auth.signIn(data)
      //   .then((res: any) => {
      //     if (res.status === 'success') {
      //       this.util.setUserObject(res.data);
      //       this.util.setToken(res.data.token);
      //       this.auth.setLoginStatus(true);
      //       this.router.navigateByUrl('/app');
      //     }
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });

    }
  }

}
