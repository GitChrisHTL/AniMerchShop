import { Routes } from '@angular/router';
import { AllProductsComponent } from "./all-products/all-products.component";
import { DetailedProductComponent } from "./detailed-product/detailed-product.component";
import { NotFoundComponent } from "./not-found/not-found.component";

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
    title: 'Page Not Found',
    component: NotFoundComponent,
    path: '**'
  }
];
