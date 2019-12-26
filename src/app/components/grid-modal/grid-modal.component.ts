import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grid-modal',
  templateUrl: './grid-modal.component.html',
  styleUrls: ['./grid-modal.component.scss']
})
export class GridModalComponent implements OnInit {

  times = [];
  depart: FormControl;
  arrive: FormControl;
  flightForm: FormGroup;

  constructor() {
    const duration = 60;

    for (let x = 1; x <= duration; x++) {
      if (!(x % 10)) {
        this.times.push(x);
      }
    }

    console.log(this.times);
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.depart = new FormControl('', [Validators.required]);
    this.arrive = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.flightForm = new FormGroup({
      depart: this.depart,
      arrive: this.arrive
    });
  }

}
