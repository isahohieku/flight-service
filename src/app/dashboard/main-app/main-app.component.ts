import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

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
      .pipe(
        map(res => res.states),
        map(res => res.slice(0, 10))
      )
      .subscribe(res => {
        this.cities = res;
        this.loading = false;
      }, e => { console.log(e); this.loading = false; }, () => request.unsubscribe());
  }

}
