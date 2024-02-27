import { Injectable } from '@angular/core';
import {ProductInterface} from "./product-interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products : ProductInterface[] = [
    {
      productId: 0,
      image: "./assets/products/tohka.jpg",
      smallImage: "./assets/detailedProducts/tohka1.jpg",
      smallImage2: "./assets/detailedProducts/tohka2.jpg",
      series: "Date A Live",
      name: "Tohka Yatogami - 1/7 (Good Smile Company)",
      price: 176.55,
      preOrder: false,
      preOrderDate: "",
      sale: false,
      saleReduction: 0,
      type: "Figure"
    },
    {
      productId: 1,
      image: "./assets/products/ganyu.jpg",
      smallImage: "./assets/detailedProducts/ganyu1.jpg",
      smallImage2: "./assets/detailedProducts/ganyu2.jpg",
      series: "Genshin Impact",
      name: "Ganyu - 1/7 (APEX)",
      price: 175.00,
      preOrder: true,
      preOrderDate: "08.07.24",
      sale: false,
      saleReduction: 0,
      type: "Figure"
    },
    {
      productId: 2,
      image: "./assets/products/makise.jpg",
      smallImage: "./assets/detailedProducts/makise1.jpg",
      smallImage2: "./assets/detailedProducts/makise2.jpg",
      series: "Steins;Gate",
      name: "Makise Kurisu - 1/7 (Good Smile Company)",
      price: 136.66,
      preOrder: true,
      preOrderDate: "01.09.24",
      sale: true,
      saleReduction: 0.9,
      type: "Figure"
    },
    {
      productId: 4,
      image: "./assets/products/frieren.jpg",
      smallImage: "./assets/detailedProducts/frieren1.jpg",
      smallImage2: "./assets/detailedProducts/frieren2.jpg",
      series: "Sousou no Frieren",
      name: "Frieren - 1/7 (Kotobukiya)",
      price: 122.86,
      preOrder: true,
      preOrderDate: "31.10.24",
      sale: true,
      saleReduction: 0.8,
      type: "Figure"
    },
    {
      productId: 3,
      image: "./assets/products/sentouki.jpg",
      smallImage: "./assets/detailedProducts/sentouki1.jpg",
      smallImage2: "./assets/detailedProducts/sentouki2.jpg",
      series: "Yu-Gi-Oh!",
      name: "Sentouki Rose - 1/7 (Kotobukiya)",
      price: 176.55,
      preOrder: false,
      preOrderDate: "",
      sale: true,
      saleReduction: 0.8,
      type: "Figure"
    },
    {
      productId: 5,
      image: "./assets/products/bluelock1.jpg",
      smallImage: "./assets/detailedProducts/bluelock11.jpg",
      smallImage2: "./assets/detailedProducts/bluelock12.jpg",
      series: "Blue Lock",
      name: "Blue Lock Vol. 1",
      price: 7.99,
      preOrder: false,
      preOrderDate: "",
      sale: false,
      saleReduction: 0,
      type: "Manga"
    },
    {
      productId: 6,
      image: "./assets/products/bluelock2.jpg",
      smallImage: "https://solarisjapan.com/cdn/shop/products/FIGURE-133246_05.jpg?v=1636453577&width=3000",
      smallImage2: "./assets/detailedProducts/bluelock22.jpg",
      series: "Blue Lock",
      name: "Blue Lock Vol. 2",
      price: 7.99,
      preOrder: false,
      preOrderDate: "",
      sale: false,
      saleReduction: 0,
      type: "Manga"
    },
    {
      productId: 7,
      image: "./assets/products/bluelock3.jpg",
      smallImage: "https://solarisjapan.com/cdn/shop/products/FIGURE-133246_05.jpg?v=1636453577&width=3000",
      smallImage2: "./assets/detailedProducts/bluelock32.jpg",
      series: "Blue Lock",
      name: "Blue Lock Vol. 3",
      price: 7.99,
      preOrder: false,
      preOrderDate: "",
      sale: false,
      saleReduction: 0,
      type: "Manga"
    },
    {
      productId: 8,
      image: "./assets/products/bluelock4.jpg",
      smallImage: "https://solarisjapan.com/cdn/shop/products/FIGURE-133246_05.jpg?v=1636453577&width=3000",
      smallImage2: "./assets/detailedProducts/bluelock42.jpg",
      series: "Blue Lock",
      name: "Blue Lock Vol. 4",
      price: 7.99,
      preOrder: false,
      preOrderDate: "",
      sale: false,
      saleReduction: 0,
      type: "Manga"
    },
    {
      productId: 9,
      image: "./assets/products/tbhk1.jpg",
      smallImage: "./assets/detailedProducts/tbhk11.jpg",
      smallImage2: "./assets/detailedProducts/tbhk12.jpg",
      series: "Toilet-Bound Hanako-Kun",
      name: "Toilet-Bound Hanako-Kun Vol. 1",
      price: 8.99,
      preOrder: false,
      preOrderDate: "",
      sale: false,
      saleReduction: 0,
      type: "Manga"
    },
    {
      productId: 10,
      image: "./assets/products/tbhk19.jpg",
      smallImage: "https://solarisjapan.com/cdn/shop/products/FIGURE-133246_05.jpg?v=1636453577&width=3000",
      smallImage2: "./assets/detailedProducts/tbhk192.jpg",
      series: "Toilet-Bound Hanako-Kun",
      name: "Toilet-Bound Hanako-Kun Vol. 19",
      price: 8.99,
      preOrder: true,
      preOrderDate: "15.03.24",
      sale: false,
      saleReduction: 0,
      type: "Manga"
    }
  ];

  constructor() {

  }

  getAllProducts() : ProductInterface[] {
    return this.products;
  }

  getProductById(productId : number) : ProductInterface | undefined {
    return this.products.find(p => p.productId === productId);
  }
}
