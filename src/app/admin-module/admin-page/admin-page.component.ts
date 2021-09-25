import {Component, OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

import { AddDishModalComponent } from "../modals/add-dish-modal/add-dish-modal.component";
import { ICategory } from "../../fastfood-module/Interfaces/ICategory";
import { IDish} from "../../fastfood-module/Interfaces/IDish";
import { DishCategoriesService } from "../../shared/services/dish-categories.service";
import { DishListService } from "../../shared/services/dish-list.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  categories: Array<ICategory> = [];
  dishList: Array<IDish> = [];

  categoryName = new FormControl('', [Validators.required]);
  categoryToDeleteId = new FormControl('', [Validators.required, Validators.pattern("^[1-9]*$"),]);
  categoryToDelete!: number;
  newCategoryName!: string;


  constructor( private http: HttpClient,
               private dishCategoriesService: DishCategoriesService,
               private dishListService: DishListService,
               public dialog: MatDialog ) { }

  ngOnInit()
  {
    this.dishCategoriesService.getDishCategories()
      .subscribe((categories: ICategory[]) => {
        this.categories = categories
      });

    this.dishListService.getDishList()
      .subscribe((dishes: IDish[]) => {
        this.dishList = dishes
      })
  }

  addNewCategory(name: string)
  {
    if(this.categoryExist(name))
    {
      this.newCategoryName = "This category already exists"
      return false
    }
    else
    {
      this.dishCategoriesService.addNewCategory(name)
        .subscribe(newCategory => {
          this.categories.push(newCategory)
        });
      return true
    }

  }

  categoryExist(categoryName: string)
  {
    return this.categories.some(function (el)
    {
      return el.name === categoryName
    });
  }


  deleteCategory(categoryToDelete: number)
  {
    this.dishCategoriesService.removeCategory(categoryToDelete)
      .subscribe(()=> {
        this.categories = this.categories.filter(category => category.id !== categoryToDelete);
      });
    this.categoryToDelete = 0;
  }

  deleteDish(dishToDeleteID: number)
  {
    this.dishListService.deleteDish(dishToDeleteID)
      .subscribe(() =>{
        this.dishList = this.dishList.filter(dish => dish.id !== dishToDeleteID);
      })
  }

  openAddNewDishDialog()
  {
    this.dialog.open(AddDishModalComponent)
  }



  //
  // addNewCategory(categoryName: string){
  //   if(this.categoryExist(categoryName))
  //   {
  //     return false
  //   }
  //   else
  //   {
  //     Repository.CategoryList.push(new Category(categoryName));
  //     return true
  //   }
  // }
}
