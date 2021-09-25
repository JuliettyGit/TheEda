import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {IState} from "../../../fastfood-module/Interfaces/IState";
import {Store} from "@ngrx/store";
import {MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {DishCategoriesService} from "../../../shared/services/dish-categories.service";
import {DishListService} from "../../../shared/services/dish-list.service";
import {IDish} from "../../../fastfood-module/Interfaces/IDish";
import {IIngredient} from "../../../fastfood-module/Interfaces/IIngredient";
import {ICategory} from "../../../fastfood-module/Interfaces/ICategory";

@Component({
  selector: 'app-add-dish-modal',
  templateUrl: './add-dish-modal.component.html',
  styleUrls: ['./add-dish-modal.component.scss']
})
export class AddDishModalComponent implements OnInit {

  categoryList: Array<ICategory> = [];
  dishList: Array<IDish> = [];

  dishTitle = new FormControl('', [Validators.required]);
  dishImg = new FormControl('', [Validators.required]);
  dishPrice = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  dishIngredients = new FormControl('', [Validators.required]);
  dishCategory = new FormControl('', [Validators.required]);

  newDish!: IDish;
  newDishName!: string
  newDishImg!: string
  newDishPrice!: number;
  newDishIngredients!: Array<IIngredient>;
  newDishCategory!: string

  constructor( private http: HttpClient,
               private dishCategoriesService: DishCategoriesService,
               private dishListService: DishListService,private store$: Store<IState>,
               public dialogRef: MatDialogRef<AddDishModalComponent>) { }

  ngOnInit(): void {
    this.dishCategoriesService.getDishCategories()
      .subscribe((categories: ICategory[]) => {
        this.categoryList = categories
      });

    this.dishListService.getDishList()
      .subscribe((dishes: IDish[]) => {
        this.dishList = dishes
      })
  }

  dishExist(dishName: string)
  {
    return this.dishList.some(function (el)
    {
      return el.name === dishName
    });
  }

  createNewDish(newDishName: string, newDishImg: string, newDishPrice: number, newDishIngredients: Array<IIngredient>, newDishCategory: string)
  {
    if(this.dishExist(newDishName))
    {
      return false
    }

    else
    {
      this.dishListService.addNewDish(newDishName, newDishImg, newDishPrice, newDishIngredients, newDishCategory)
        .subscribe( newDish => {
          console.log(newDish)
          this.dishList.push(newDish)

        })
      return true
    }
  }

  close(): void
  {
    this.dialogRef.close();
  }
}
