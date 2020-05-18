import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent {
  public readonly backgroundImageStyles: SafeStyle[] = [
    'assets/ex-sit.jpg',
    'assets/ex-up.jpg',
    'assets/ex-down.jpg'
  ].map((url: string) => {
    const sanitizedValue: SafeStyle = this.domSanitizer.bypassSecurityTrustStyle(`background-image: url(${url})`);
    return sanitizedValue;
  });

  constructor(private readonly domSanitizer: DomSanitizer) {}
}
