import {Component, inject} from '@angular/core';
import {ProductInterface} from "../product-interface";
import {NgForOf} from "@angular/common";
import {ProductComponent} from "../product/product.component";
import {SliderComponent} from "../slider/slider.component";
import {FooterComponent} from "../footer/footer.component";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [
    NgForOf,
    ProductComponent,
    FooterComponent,
    SliderComponent
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  products : ProductInterface[] = [];
  productsService : ProductsService = inject(ProductsService);

  constructor() {
    this.products = this.productsService.getAllProducts();
  }
}

//Back to top button transition
document.addEventListener('DOMContentLoaded', () => {
  const backToTop: HTMLElement | null = document.getElementById('backToTop');
  const scrollThreshold: number = 30;

  function checkScrollThreshold() {
    const scrollPosition: number = window.scrollY || window.pageYOffset;
    const windowHeight: number = window.innerHeight;
    const documentHeight: number = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    const scrollPercentage: number = (scrollPosition / (documentHeight - windowHeight)) * 100;

    if (scrollPercentage >= scrollThreshold) {
      backToTop?.classList.add('visible');
    } else {
      backToTop?.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', checkScrollThreshold);
});
