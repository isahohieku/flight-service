import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { take, filter, takeUntil } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cities = [];
  loading = false;
  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    const url = 'https://opensky-network.org/api/states/all';

    this.loading = true;
    const request: Subscription = this.crud.getResource(url)
      .subscribe(res => {
        this.cities = res.states.slice(0, 10);
        console.log(this.cities);
        this.loading = false;


      }, e => { console.log(e); this.loading = false; }, () => request.unsubscribe());
  }

}
