import { Component } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent {
  public readonly exUrls: string[] = ['assets/ex-sit.jpg', 'assets/ex-up.jpg', 'assets/ex-down.jpg'];
}
