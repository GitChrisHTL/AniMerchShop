import {Component, Input} from '@angular/core';
import {ProductInterface} from "../product-interface";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() productInterface! : ProductInterface;
  protected readonly Math = Math;
}
