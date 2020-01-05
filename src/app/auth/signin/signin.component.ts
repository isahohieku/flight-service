import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private util: UtilService, private router: Router) {
    if (this.util.getUserObject() !== null) {
      this.router.navigateByUrl('/app');
    }
  }

  ngOnInit() { }

}
