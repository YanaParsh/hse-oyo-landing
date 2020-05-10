import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-pictures',
  templateUrl: './feature-pictures.component.html',
  styleUrls: ['./feature-pictures.component.scss']
})
export class FeaturePicturesComponent {
  public readonly imagesUrls: string[] = [
    '/assets/at-home.jpg',
    '/assets/at-office.jpg',
    '/assets/at-travel.jpg',
    '/assets/outdoors.jpg'
  ];
}
