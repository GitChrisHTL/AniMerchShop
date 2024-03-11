import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ProductInterface} from "../product-interface";
import {FooterComponent} from "../footer/footer.component";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-delivery-details',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent
  ],
  templateUrl: './delivery-details.component.html',
  styleUrl: './delivery-details.component.css'
})
export class DeliveryDetailsComponent {
  shoppingCartService : ShoppingCartService = inject(ShoppingCartService);
  productsInCart : ProductInterface[] = [];


  constructor() {
    this.productsInCart = this.shoppingCartService.getProductsInShoppingCart();
  }
}
