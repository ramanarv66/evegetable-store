import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evegetable-store';
  addedItem: boolean = false;

  constructor(public dialog: MatDialog) {

  }
  count: number = 0;
  showModal: boolean = false;
  vegList = [];
  addItems() {
    this.addedItem = true;
    this.count = this.count + 1;
  }
  removeItems() {
    if (this.count <= 0) {
      this.showModal = true;
      this.count = 0;
      this.dialog.open(DialogComponent);
    } else {
   
      this.count = this.count - 1;
    }
  }
}
