import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-upi-dialog',
  templateUrl: './upi-dialog.component.html',
  styleUrl: './upi-dialog.component.css'
})
export class UpiDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
