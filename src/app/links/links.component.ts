import { Component, OnInit } from '@angular/core';
interface Link {
  title: string;
  url: string;
}
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  links: Link[] = [
    { title: 'Website', url: 'https://www.oyofitness.com/our-team/' },
    { title: 'Instagram', url: 'https://www.instagram.com/oyofitness/' },
    { title: 'Facebook', url: 'https://www.facebook.com/OYOFitness/' },
    { title: 'YouTube', url: 'https://www.youtube.com/oyofitness' }
  ];
}
