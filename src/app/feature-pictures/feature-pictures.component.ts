import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-feature-pictures',
  templateUrl: './feature-pictures.component.html',
  styleUrls: ['./feature-pictures.component.scss']
})
export class FeaturePicturesComponent {
  constructor(private readonly domSanitizer: DomSanitizer) {}

  public readonly imagesUrls: SafeStyle[] = [
    'assets/at-home.jpg',
    'assets/at-travel.jpg',
    'assets/at-office.jpg',
    'assets/outdoors.jpg'
  ].map((unsafeUrl) => this.domSanitizer.bypassSecurityTrustStyle(`url(${unsafeUrl})`));
}
