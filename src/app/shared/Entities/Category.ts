export class Category {
  categoryName: string;

  constructor(categoryName: string) {
    this.categoryName = categoryName
  }

  static pizza: Category = new Category("Pizza");
  static potato: Category = new Category("Potato");
  static salad: Category = new Category("Salad");
  static desert: Category = new Category("Desert");
}
