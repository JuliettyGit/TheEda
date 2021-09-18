import { Dish } from "../Entities/Dish";
import { Ingredient } from "../Entities/Ingredient";
// import { Order } from "../Entities/Order";
// import { User } from "../Entities/User";

export class Repository {
  dishes: Array<Dish> = [{name: "Chicago Pizza", img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', price: '2$', ingredients: []},
    {name: "Pepperoni", img: '',price: "1S", ingredients: []}];
  ingredients!: Array<Ingredient>;
  // orders!: Array<Order>;
  // users!: Array<User>

  constructor() {
    // this.seedData();
  }

  // seedData()
  // {
  //   this.dishes.push(new Dish("Chicago Pizza", 24.99, [
  //     new Ingredient("Dough", 12.00),
  //     new Ingredient("Pepperoni", 5.00),
  //     new Ingredient("Mozzarella", 7.20),
  //     new Ingredient("Tomato", 2.29)]));
  //   console.log(this.dishes)
  // }
}
