import { IIngredient} from "./IIngredient";

export interface IDish {
  id: number;
  name: string;
  img: string;
  price: number;
  ingredients: Array<IIngredient>,
  category: string
}
