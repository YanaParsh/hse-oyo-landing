import { Component, OnInit } from '@angular/core';
interface Feature {
  title: string;
  icon: string;
}
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features: Feature[] = [
    { title: 'Training at home', icon: 'home' },
    { title: 'Training while traveling', icon: 'explore' },
    { title: 'Training at office', icon: 'business_center' },
    { title: 'Training outdoors', icon: 'nature' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
