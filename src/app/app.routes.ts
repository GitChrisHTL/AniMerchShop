import { Routes } from '@angular/router';
import { AllProductsComponent } from "./all-products/all-products.component";
import { DetailedProductComponent } from "./detailed-product/detailed-product.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {DeliveryDetailsComponent} from "./delivery-details/delivery-details.component";

export const routes: Routes = [
  {
    title: 'Homepage',
    component: AllProductsComponent,
    path: ''
  },
  {
    title: 'Product Details',
    component: DetailedProductComponent,
    path: 'product/:productId'
  },
  {
    title: "Shopping Cart",
    component: ShoppingCartComponent,
    path: 'shoppingCart'
  },
  {
    title: "Delivery Details",
    component: DeliveryDetailsComponent,
    path: 'deliveryDetails'
  },
  {
    title: 'Page Not Found',
    component: NotFoundComponent,
    path: '**'
  }
];
