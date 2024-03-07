import {Component, inject} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {ShoppingCartService} from "../shopping-cart.service";
import {NgForOf} from "@angular/common";
import {ProductComponent} from "../product/product.component";
import {ProductInCartComponent} from "../product-in-cart/product-in-cart.component";
import {ProductInterface} from "../product-interface";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    FooterComponent,
    NgForOf,
    ProductComponent,
    ProductInCartComponent,
    RouterLink
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  shoppingCartService : ShoppingCartService = inject(ShoppingCartService);
  productsInCart : ProductInterface[] = [];

  constructor() {
    this.productsInCart = this.shoppingCartService.getProductsInShoppingCart();
  }

  getTotalPrice(): number {
    const totalPrice = this.productsInCart.reduce((total, product) =>
      total + (this.getSalePrice(product) * product.productCountInCart), 0);
    return parseFloat(totalPrice.toFixed(2));
  }

  getSalePrice(product: ProductInterface): number {
    if(product.sale) {
      return (product.price * product.saleReduction);
    } else {
      return product.price;
    }
  }

}
