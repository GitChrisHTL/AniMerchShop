import {Component, inject} from '@angular/core';
import {ProductInterface} from "../product-interface";
import {ProductsService} from "../products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-detailed-product',
  standalone: true,
  imports: [
    NgIf,
    FooterComponent
  ],
  templateUrl: './detailed-product.component.html',
  styleUrl: './detailed-product.component.css'
})
export class DetailedProductComponent {
  router : Router = inject(Router);
  route : ActivatedRoute = inject(ActivatedRoute);
  product : ProductInterface | undefined;
  productsService : ProductsService = inject(ProductsService);

  today : Date = new Date();
  otherDateString : string | undefined;
  otherDate : Date;
  differenceInDays : number;

  constructor() {
    const id : number = Number(this.route.snapshot.params['productId']);
    this.product = this.productsService.getProductById(id);
    this.otherDateString = this.product?.preOrderDate;

    if (this.otherDateString) {
      const [day, month, year] = this.otherDateString.split('.').map(Number);
      this.otherDate = new Date(2000 + year, month - 1, day);
      const differenceInTime = this.otherDate.getTime() - this.today.getTime();
      this.differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    } else {
      this.otherDate = new Date();
      this.differenceInDays = 0;
    }
  }

  onAddToShoppingCart() {
    console.log(this.product?.name + ' added to your shopping cart!');
    void this.router.navigate(['']);
  }

  protected readonly Math = Math;
  protected readonly Date = Date;
}