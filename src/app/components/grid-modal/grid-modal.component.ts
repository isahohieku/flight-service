import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { CrudService } from 'src/app/services/crud.service';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(private crud: CrudService, @Inject(MAT_DIALOG_DATA) public data: any) {
    const duration = 60;

    for (let x = 1; x <= duration; x++) {
      if (!(x % 10)) {
        this.times.push(x);
      }
    }
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.listenToChanges();
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

  listenToChanges() {
    let currentTime;
    let timeElapse;
    const url = 'https://opensky-network.org/api/flights/aircraft?';
    this.depart.valueChanges
      .pipe(
        tap(() => {
          currentTime = moment(); timeElapse = moment(currentTime).subtract(this.depart.value, 'm').unix();
        }),
        switchMap(value => this.crud.getResource(`${url}icao24=${this.data[0]}&begin=${timeElapse}&end=${currentTime.unix()}`))
      )
      .subscribe((res: any) => {
        console.log(res);
      }, e => console.log(e));
  }

  search() {
    
  }

}
