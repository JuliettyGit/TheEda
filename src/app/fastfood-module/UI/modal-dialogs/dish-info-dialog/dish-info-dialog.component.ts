import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {Dish} from "../../../../shared/Entities/Dish";
import {AddToOrder} from "../../../../shared/store/actions/orderAction";
import {Store} from "@ngrx/store";
import {IState} from "../../../Interfaces/IState";
import {IDish} from "../../../Interfaces/IDish";

@Component({
  selector: 'app-dish-info-dialog',
  templateUrl: './dish-info-dialog.component.html',
  styleUrls: ['./dish-info-dialog.component.scss']
})
export class DishInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DishInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: IDish,
              private store$: Store<IState>){ }

  ngOnInit(): void {
  }

  close(): void
  {
    this.dialogRef.close();
  }

  addToOrder(dish: IDish) {
    this.store$.dispatch(new AddToOrder(dish));
  }
}
