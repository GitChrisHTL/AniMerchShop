import { Injectable } from '@angular/core';
import {ProductInterface} from "./product-interface";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private products: ProductInterface[] = [];

  constructor() { }

  private containsProduct(product: ProductInterface) : boolean {
    return this.products.some(p => p.productId === product.productId);
  }

  addToShoppingCart(product: ProductInterface) : boolean {
    let result : boolean = false;

    if(!this.containsProduct(product)) {
      this.products.push(product);
      result = true;
    }

    return result;
  }

  removeFromShoppingCart(product: ProductInterface): boolean {
    let result: boolean = false;

    if (this.containsProduct(product)) {
      let indexToRemove = this.products.findIndex(item => item === product);

      if (indexToRemove !== -1) {
        this.products.splice(indexToRemove, 1);
        result = true;
      }
    }

    return result;
  }


  getProductsInShoppingCart() : ProductInterface[] {
    return this.products;
  }
}
