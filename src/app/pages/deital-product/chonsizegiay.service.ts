import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `
    <h1 mat-dialog-title>{{ data.title }}</h1>
    <div mat-dialog-content>
    <img src="https://giaycaosmartmen.com/wp-content/uploads/2020/09/bang-size-giay-chuan.png" alt="">\
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
     
    </div>
  `
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
