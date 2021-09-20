import { IIngredient} from "./IIngredient";

export interface IDish {
  name: string;
  img: string;
  price: string;
  ingredients: Array<IIngredient>,
  category: string
}
