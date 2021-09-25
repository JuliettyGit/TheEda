export class Ingredient {
  name: string;
  price: number;

  constructor(name: string, price: number)
  {
    this.name = name;
    this.price = price;
  }

  static pepperoni = new Ingredient("Pepperoni", 2);
  static tomatoes = new Ingredient("Tomatoes", 1);
  static mozzarella = new Ingredient("Mozzarella", 2);
  static mushrooms = new Ingredient("Mushrooms", 1);
  static souseBBQ = new Ingredient("BBQ souse", 1);
  static souseAlfredo = new Ingredient("Alfredo souse", 1);
  static creamSouse = new Ingredient("Cream Souse", 1);
  static corn = new Ingredient("Corn", 1);
  static onion = new Ingredient("Onion", 1);
  static bavarianSausages = new Ingredient("Bavarian sausages", 2);
  static bellPepper = new Ingredient("bellPepper", 1);
  static hotPeppers = new Ingredient("Hot peppers", 1);
  static chicken = new Ingredient("Chicken meat", 2);
  static pineapple = new Ingredient("Pineapple", 1);
  static bacon = new Ingredient("Bacon", 2);
  static olives = new Ingredient("Olives", 1);
  static ham = new Ingredient("Ham", 2);
  static cucumbers = new Ingredient("Pickled Cucumbers", 1);
  static jalapeno = new Ingredient("Jalapeno", 1);
  static salmon = new Ingredient("Salmon", 2);

}
