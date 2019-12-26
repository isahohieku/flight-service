import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GridModalComponent } from '../grid-modal/grid-modal.component';

@Component({
  selector: 'app-airport-card',
  templateUrl: './airport-card.component.html',
  styleUrls: ['./airport-card.component.scss']
})
export class AirportCardComponent implements OnInit {

  @Input() data: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openCreateModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.data = this.data;
    this.dialog.open(GridModalComponent, dialogConfig)
      .afterClosed().subscribe(_ => { });
  }

}
