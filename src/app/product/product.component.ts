import {Component, Input} from '@angular/core';
import {ProductInterface} from "../product-interface";
import {RouterLink} from "@angular/router";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterLink,
    DecimalPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() productInterface! : ProductInterface;
  protected readonly Math = Math;
}
