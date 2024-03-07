import {Component, inject, Input} from '@angular/core';
import {ProductInterface} from "../product-interface";
import {DecimalPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-product-in-cart',
  standalone: true,
  imports: [
    DecimalPipe,
    RouterLink
  ],
  templateUrl: './product-in-cart.component.html',
  styleUrl: './product-in-cart.component.css'
})
export class ProductInCartComponent {
  @Input() productInterface! : ProductInterface;
  protected readonly Math = Math;
  private shoppingCartService : ShoppingCartService = inject(ShoppingCartService);

  onDecreaseProductCount() {
    if (this.productInterface.productCountInCart > 1) {
      this.productInterface.productCountInCart--;
      let cartCount = document.getElementById("cartCount");
      // @ts-ignore
      let newCartCount = parseInt(cartCount.textContent) - 1;
      // @ts-ignore
      cartCount.textContent = newCartCount.toString();
    }
  }

  onIncreaseProductCount() {
    if (this.productInterface.productCountInCart < this.productInterface.stock) {
      this.productInterface.productCountInCart++;
      let cartCount = document.getElementById("cartCount");
      // @ts-ignore
      let newCartCount = parseInt(cartCount.textContent) + 1;
      // @ts-ignore
      cartCount.textContent = newCartCount.toString();
    }
  }

  onRemoveProductFromCart() {
    let cartCount = document.getElementById("cartCount");
    // @ts-ignore
    let newCartCount = parseInt(cartCount.textContent) - this.productInterface.productCountInCart;
    // @ts-ignore
    cartCount.textContent = newCartCount.toString();
    this.productInterface.productCountInCart = 0;
    this.shoppingCartService.removeFromShoppingCart(this.productInterface);
  }
}
