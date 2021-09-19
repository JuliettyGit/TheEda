import { Dish } from "../Entities/Dish";
import { Ingredient } from "../Entities/Ingredient";

export class Repository {
  dishes: Array<Dish> = [
    {name: "Mushroom Pizza", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg', price: '25$', ingredients: [], category: "Pizza"},
    {name: "Pepperoni", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi-thumbnail-960x960-70.jpg',price: "1S", ingredients: [], category: "Pizza"},
    {name: "Margarita", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min-thumbnail-960x960-70.jpg', price: "50$", ingredients: [], category: "Pizza"},
    {name: "Grill Mix", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Grill_slice_collageweb-min-thumbnail-960x960-70.jpg', price: "50$", ingredients: [], category: "Pizza"},
    {name: "Hawaii", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%93%D0%B0%D0%B2%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B0_300dpi-min-thumbnail-960x960-70.jpg', price: "50$", ingredients: [], category: "Pizza"},
    {name: "BBQ", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/22/BBQ-thumbnail-960x960-70.jpg', price: "50$", ingredients: [], category: "Pizza"},
    {name: "Country", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9A%D0%B0%D0%BD%D1%82%D1%80%D0%B8_300dpi-min-thumbnail-960x960-70.jpg', price: "50$", ingredients: [], category: "Pizza"},
    {name: "Vegan", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%BE%D0%B2%D0%BE%D1%87%D1%8D%D0%B2%D0%B0_%D1%84%D1%8D%D0%B5%D1%80%D0%B8%D1%8F_300dpi-min-thumbnail-960x960-70.jpg', price: "50$", ingredients: [], category: "Pizza"},
    {name: "Spicy", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A1%D0%BF%D0%B0%D0%B9%D1%81%D0%B8_300dpi-min-thumbnail-960x960-70.jpg', price: "50$", ingredients: [], category: "Pizza"},
    {name: "Philadelphia", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/SalmonPhill-slicere-made-web-min-min-thumbnail-960x960-70.jpg', price: "50$", ingredients: [], category: "Pizza"},
    {name: "Five Cheeses", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/04/%D0%9F%D1%8F%D1%82%D1%8C_%D1%81%D1%8B%D1%80%D0%BE%D0%B2_300dpi-min-thumbnail-960x960-70.jpg', price: "50$", ingredients: [], category: "Pizza"},
    {name: "Texas", img: 'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min-thumbnail-960x960-70.jpg', price: "50$", ingredients: [], category: "Pizza"}];


  constructor() {}
}
