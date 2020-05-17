import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Link {
  title: string;
  url: string;
  iconSrc: SafeResourceUrl;
  color: string;
}
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  links: Link[] = [
    {
      title: 'Website',
      url: 'https://www.oyofitness.com/our-team/',
      iconSrc: 'assets/globe-outline.svg',
      color: 'orange'
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/oyofitness/',
      iconSrc: 'assets/logo-instagram.svg',
      color: 'purple'
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/OYOFitness/',
      iconSrc: 'assets/logo-facebook.svg',
      color: 'orange'
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/oyofitness',
      iconSrc: 'assets/logo-youtube.svg',
      color: 'orange'
    }
  ].map((item) => ({
    ...item,
    iconSrc: this.domSanitizer.bypassSecurityTrustResourceUrl(item.iconSrc)
  }));

  constructor(private readonly domSanitizer: DomSanitizer) {}
}
