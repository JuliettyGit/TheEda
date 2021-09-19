import {Ingredient} from "./Ingredient";

export interface Dish {
  name: string;
  img: string;
  price: string;
  ingredients: Array<Ingredient>,
  category: string
}
