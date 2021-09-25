import { Dish } from "../Entities/Dish";
import { Category } from "../Entities/Category";
import { Ingredient } from "../Entities/Ingredient";

export class Repository {
  static CategoryList: Array<Category> = [Category.pizza, Category.potato, Category.salad,
    Category.desert];

  static IngredientList: Array<Ingredient> = [
    Ingredient.pepperoni,
    Ingredient.mozzarella,
    Ingredient.mushrooms,
    Ingredient.tomatoes,
    Ingredient.souseBBQ,
    Ingredient.souseAlfredo,
    Ingredient.creamSouse,
    Ingredient.corn,
    Ingredient.onion,
    Ingredient.bavarianSausages,
    Ingredient.bellPepper,
    Ingredient.hotPeppers,
    Ingredient.chicken,
    Ingredient.pineapple,
    Ingredient.bacon,
    Ingredient.olives,
    Ingredient.ham,
    Ingredient.cucumbers,
    Ingredient.jalapeno,
    Ingredient.salmon

  ]
  static RDishList: Array<Dish> = [
    Dish.carbonara,
    Dish.texas,
    Dish.vegan,
    Dish.mushroomPizza,
    Dish.pepperoni,
    Dish.margarita,
    Dish.grillMix,
    Dish.hawaii,
    Dish.bbq,
    Dish.country,
    Dish.spicy,
    Dish.philadelphia,

    Dish.countryStylePotatoes,
    Dish.frenchFries,

    Dish.mozzarellaSalad,
    Dish.spinachSalad,
    Dish.saladWithTuna,
    Dish.chickenSalad,

    Dish.cinnamonBites,
    Dish.chocolateFondant,
    Dish.chocolateMuffin,
    Dish.vanillaMuffin,
    Dish.chocolateRolls,
  ];


}
