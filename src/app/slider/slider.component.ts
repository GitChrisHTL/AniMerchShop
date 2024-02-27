import { Component } from '@angular/core';
import {AllProductsComponent} from "../all-products/all-products.component";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    AllProductsComponent
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

}
