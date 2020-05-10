import { Component } from '@angular/core';

interface Feature {
  title: string;
  icon: string;
}
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features: Feature[] = [
    { title: 'Skip the health club round-trips and fees', icon: 'schedule' },
    { title: 'Dublicate the same exercises and results', icon: 'fitness_center' },
    { title: 'Build and sculpt all your body', icon: 'accessibility_new' },
    { title: 'Proven NASA technology', icon: 'public' }
  ];
}
