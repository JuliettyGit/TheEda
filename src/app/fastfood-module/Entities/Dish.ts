import {Ingredient} from "./Ingredient";

export class Dish {
  name: string;
  price: number;
  ingredients: Array<Ingredient>

  constructor(name: string, price: number, ingredients: Array<Ingredient>) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
  }
}
