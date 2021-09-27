import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AlertModalComponent>,
               @Inject(MAT_DIALOG_DATA)
               public data: string ) { }

  ngOnInit(): void {}

  close(): void
  {
    this.dialogRef.close();
  }

}
