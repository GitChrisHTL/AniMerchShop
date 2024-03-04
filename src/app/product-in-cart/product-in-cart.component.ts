import {Component, Input} from '@angular/core';
import {ProductInterface} from "../product-interface";
import {DecimalPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

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
}
