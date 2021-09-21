import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {IDish} from "../../../Interfaces/IDish";

@Component({
  selector: 'app-dish-info-dialog',
  templateUrl: './dish-info-dialog.component.html',
  styleUrls: ['./dish-info-dialog.component.scss']
})
export class DishInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DishInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: IDish) { }

  ngOnInit(): void {
  }

  close(): void
  {
    this.dialogRef.close();
  }

}
