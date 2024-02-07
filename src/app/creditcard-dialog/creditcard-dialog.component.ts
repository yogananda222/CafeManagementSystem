import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-creditcard-dialog',
  templateUrl: './creditcard-dialog.component.html',
  styleUrl: './creditcard-dialog.component.css'
})
export class CreditcardDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
