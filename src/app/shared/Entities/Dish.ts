import { Category } from "./Category";
import {Ingredient} from "./Ingredient";

export class Dish {
  name: string;
  img: string;
  price: number;
  ingredients: Array<Ingredient>| undefined;
  category: string;

  constructor(name: string,
              img: string,
              price: number,
              ingredients: Array<Ingredient> | undefined,
              category: string) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.ingredients = ingredients;
    this.category = category
  }

  static carbonara: Dish = new Dish("Carbonara",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9A%D0%B0%D1%80%D0%B1%D0%BE%D0%BD%D0%B0%D1%80%D0%B0_300dpi-min-thumbnail-960x960-70.jpg',
    5,
    [Ingredient.onion, Ingredient.bacon, Ingredient.ham, Ingredient.mozzarella, Ingredient.mushrooms, Ingredient.souseAlfredo],
    Category.pizza.categoryName,
  );

  static texas = new Dish("Texas",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg',
    5,
    [Ingredient.corn, Ingredient.onion, Ingredient.mushrooms, Ingredient.bavarianSausages, Ingredient.mozzarella, Ingredient.souseBBQ],
    Category.pizza.categoryName,
  );

  static vegan = new Dish("Vegan",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%BE%D0%B2%D0%BE%D1%87%D1%8D%D0%B2%D0%B0_%D1%84%D1%8D%D0%B5%D1%80%D0%B8%D1%8F_300dpi-min-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.bellPepper,
      Ingredient.olives,
      Ingredient.onion,
      Ingredient.mushrooms,
      Ingredient.tomatoes,
      Ingredient.mozzarella,
      Ingredient.creamSouse],
    Category.pizza.categoryName,);

  static mushroomPizza = new Dish("Mushroom Pizza",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.mushrooms,
      Ingredient.tomatoes,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.pizza.categoryName,);

  static pepperoni = new Dish("Pepperoni",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi-thumbnail-960x960-70.jpg',
    2,

    [Ingredient.pepperoni,
      Ingredient.tomatoes,
      Ingredient.mozzarella,
      Ingredient.souseBBQ],
    Category.pizza.categoryName,);

  static margarita = new Dish("Margarita",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.mozzarella,
      Ingredient.creamSouse],
    Category.pizza.categoryName,);

  static grillMix = new Dish("Grill Mix",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Grill_slice_collageweb-min-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.chicken,
      Ingredient.onion,
      Ingredient.bacon,
      Ingredient.bellPepper,
      Ingredient.mozzarella,
      Ingredient.souseBBQ],
    Category.pizza.categoryName,);

  static hawaii = new Dish("Hawaii",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%93%D0%B0%D0%B2%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B0_300dpi-min-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.pineapple,
      Ingredient.chicken,
      Ingredient.corn,
      Ingredient.creamSouse],
    Category.pizza.categoryName,);

  static bbq = new Dish("BBQ",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/BBQ_DeLUX_300dpi-min-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.chicken,
      Ingredient.onion,
      Ingredient.bellPepper,
      Ingredient.mozzarella,
      Ingredient.mushrooms,
      Ingredient.pepperoni,
      Ingredient.souseBBQ],
    Category.pizza.categoryName,);

  static country = new Dish("Country",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9A%D0%B0%D0%BD%D1%82%D1%80%D0%B8_300dpi-min-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.onion,
      Ingredient.mushrooms,
      Ingredient.bacon,
      Ingredient.mozzarella,
      Ingredient.ham,
      Ingredient.cucumbers,
      Ingredient.souseAlfredo],
    Category.pizza.categoryName,);

  static spicy = new Dish("Spicy",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A1%D0%BF%D0%B0%D0%B9%D1%81%D0%B8_300dpi-min-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.jalapeno,
      Ingredient.bacon,
      Ingredient.mozzarella,
      Ingredient.pepperoni,
      Ingredient.tomatoes,
      Ingredient.souseBBQ],
    Category.pizza.categoryName,);

  static philadelphia = new Dish("Philadelphia",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/SalmonPhill-slicere-made-web-min-min-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.pizza.categoryName,);

  static countryStylePotatoes = new Dish("Country style potatoes",
    'https://media.dominos.ua/__sized__/menu/product_osg_image/2018/04/03/%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D0%BF%D0%BB%D1%8F%D0%BD%D1%96_%D1%88%D0%BC%D0%B0%D1%82%D0%BE%D1%87%D0%BA%D0%B8-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.potato.categoryName,);

  static frenchFries = new Dish("French fries",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Fri_potato_Dominosweb-min-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.potato.categoryName,);

  static spinachSalad =  new Dish("Spinach salad",
    'https://media.dominos.ua/__sized__/menu/product_osg_image/2018/04/03/%D0%A1%D0%B0%D0%BB%D0%B0%D1%82_%D1%81%D0%BE_%D1%88%D0%BF%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D0%BC-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.salad.categoryName,);

  static chickenSalad = new Dish("Chicken salad",
    'https://media.dominos.ua/__sized__/menu/product_osg_image/2018/04/03/%D0%A1%D0%B0%D0%BB%D0%B0%D1%82_%D1%81_%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B5%D0%B9-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.salad.categoryName,);

  static saladWithTuna = new Dish("Salad with tuna",
    'https://media.dominos.ua/__sized__/menu/product_osg_image/2018/04/03/%D0%A1%D0%B0%D0%BB%D0%B0%D1%82_%D1%81_%D1%82%D1%83%D0%BD%D1%86%D0%BE%D0%BC-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.salad.categoryName,);

  static mozzarellaSalad = new Dish("Mozzarella salad",
    'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2020/07/22/Salad_MozzarellaTomat_web-min-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.salad.categoryName,);

  static cinnamonBites = new Dish("Cinnamon Bites",
    'https://media.dominos.ua/__sized__/menu/product_osg_image/2018/03/30/%D0%91%D0%B0%D0%B9%D1%82%D1%81%D1%8B_%D1%81_%D0%BA%D0%BE%D1%80%D0%B8%D1%86%D0%B5%D0%B9-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.desert.categoryName,);

  static chocolateFondant = new Dish("Chocolate fondant",
    'https://media.dominos.ua/__sized__/menu/product_osg_image/2018/03/23/%D0%BB%D0%B0%D0%B2%D0%B0_%D0%BA%D0%B5%D0%B9%D0%BA-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.desert.categoryName,);

  static chocolateMuffin = new Dish("Chocolate muffin",
    'https://media.dominos.ua/__sized__/menu/product_osg_image/2018/03/23/black_maffin-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.desert.categoryName,);

  static vanillaMuffin = new Dish("Vanilla muffin",
    'https://media.dominos.ua/__sized__/menu/product_osg_image/2018/03/23/white_maffin-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.desert.categoryName,);

  static chocolateRolls = new Dish("Chocolate rolls",
    'https://media.dominos.ua/__sized__/menu/product_osg_image/2018/03/23/ChocoRolltarelka-thumbnail-960x960-70.jpg',
    5,

    [Ingredient.salmon,
      Ingredient.creamSouse,
      Ingredient.souseAlfredo,
      Ingredient.mozzarella],
    Category.desert.categoryName,);

}
