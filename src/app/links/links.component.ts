import { Component, HostListener } from '@angular/core';
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
  public hoveredUrl: string = null;

  links: Link[] = [
    {
      title: 'Website',
      url: 'https://www.oyofitness.com/our-team/',
      iconSrc: 'assets/globe-outline.svg',
      color: 'black'
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
      color: 'blue'
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/oyofitness',
      iconSrc: 'assets/logo-youtube.svg',
      color: 'red'
    }
  ].map((item) => ({
    ...item,
    iconSrc: this.domSanitizer.bypassSecurityTrustResourceUrl(item.iconSrc)
  }));

  constructor(private readonly domSanitizer: DomSanitizer) {}

  @HostListener('mouseleave')
  public processMouseLeave(): void {
    this.hoveredUrl = null;
  }
}
