import { Injectable } from '@angular/core';
import {ProductInterface} from "./product-interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products : ProductInterface[] = [
    {
      productId: 0,
      image: "./assets/products/tanjirokimono.jpg",
      smallImage: "./assets/detailedProducts/tanjirokimono1.jpg",
      smallImage2: "./assets/detailedProducts/tanjirokimono2.jpg",
      series: "Demon Slayer",
      name: "Tanjiro Kamado Kimono",
      price: 26.13,
      preOrder: false,
      preOrderDate: "",
      sale: true,
      saleReduction: 0.54,
      stock: 17,
      description: "Inspired by the iconic character from \"Demon Slayer\". Crafted with high-quality materials, it offers both comfort and durability. Perfect for cosplayers seeking authenticity.",
      type: "Apparel",
      productCountInCart: 0
    },
    {
      productId: 1,
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
      stock: 84,
      description: "This intricately designed figure faithfully captures the essence of the beloved character from \"Date A Live\" in a new years theme. Whether you're a passionate collector or a fan of the series, this figure is a must-have addition to your collection, destined to become the centerpiece of any display.",
      type: "Figure",
      productCountInCart: 0
    },
    {
      productId: 2,
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
      stock: 100,
      description: "This exquisite figure brings the beloved character from \"Genshin Impact\" to life with unparalleled detail and craftsmanship. Whether you're a devoted fan of \"Genshin Impact\" or an avid collector, this figure is sure to captivate with its stunning beauty and quality craftsmanship, making it a prized addition to any collection.",
      type: "Figure",
      productCountInCart: 0
    },
    {
      productId: 3,
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
      stock: 100,
      description: "This stunning figure brings the beloved character from \"Steins;Gate\" to life in a elegant bridal ensemble. Whether you're a devoted fan of \"Steins;Gate\" or a collector of fine figures, this masterpiece is sure to become the centerpiece of your collection, capturing the timeless beauty of Makise Kurisu in all her glory.",
      type: "Figure",
      productCountInCart: 0
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
      stock: 100,
      description: "This exquisite figure brings the beloved character from \"Frieren: Beyond Journey's End\" to life with unparalleled detail and craftsmanship. Whether you're a devoted fan of \"Frieren: Beyond Journey's End\" or an avid collector, this figure is sure to captivate with its stunning beauty and quality craftsmanship, making it a prized addition to any collection.",
      type: "Figure",
      productCountInCart: 0
    },
    {
      productId: 5,
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
      stock: 21,
      description: "This striking figure brings the iconic card to life with impeccable detail and craftsmanship. Whether you're a dedicated \"Yu-Gi-Oh!\" fan, a player of this deck theme or a collector of exquisite figures, this masterpiece is sure to command attention and admiration, making it a must-have addition to any collection.",
      type: "Figure",
      productCountInCart: 0
    },
    {
      productId: 6,
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
      stock: 85,
      description: "Dive into the world of intense competition and high-stakes matches as talented young players vie for a chance at glory in the Blue Lock program. With dynamic artwork and compelling storytelling, \"Blue Lock\" is sure to capture every soccer fan.",
      type: "Manga",
      productCountInCart: 0
    },
    {
      productId: 7,
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
      stock: 30,
      description: "Dive into the world of intense competition and high-stakes matches as talented young players vie for a chance at glory in the Blue Lock program. With dynamic artwork and compelling storytelling, \"Blue Lock\" is sure to capture every soccer fan.",
      type: "Manga",
      productCountInCart: 0
    },
    {
      productId: 8,
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
      stock: 11,
      description: "Dive into the world of intense competition and high-stakes matches as talented young players vie for a chance at glory in the Blue Lock program. With dynamic artwork and compelling storytelling, \"Blue Lock\" is sure to capture every soccer fan.",
      type: "Manga",
      productCountInCart: 0
    },
    {
      productId: 9,
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
      stock: 39,
      description: "Dive into the world of intense competition and high-stakes matches as talented young players vie for a chance at glory in the Blue Lock program. With dynamic artwork and compelling storytelling, \"Blue Lock\" is sure to capture every soccer fan.",
      type: "Manga",
      productCountInCart: 0
    },
    {
      productId: 10,
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
      stock: 81,
      description: "Step into the mysterious world of Kamome Academy, where rumors swirl about the enigmatic ghost, Hanako-san, who haunts the school's bathrooms. Follow Nene Yashiro as she strikes a deal with Hanako-san and becomes entangled in a series of otherworldly adventures. With captivating artwork and a spellbinding narrative, \"Toilet-Bound Hanako-Kun\" is sure to capture fans of the supernatural.",
      type: "Manga",
      productCountInCart: 0
    },
    {
      productId: 11,
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
      stock: 71,
      description: "Step into the mysterious world of Kamome Academy, where rumors swirl about the enigmatic ghost, Hanako-san, who haunts the school's bathrooms. Follow Nene Yashiro as she strikes a deal with Hanako-san and becomes entangled in a series of otherworldly adventures. With captivating artwork and a spellbinding narrative, \"Toilet-Bound Hanako-Kun\" is sure to capture fans of the supernatural.",
      type: "Manga",
      productCountInCart: 0
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
