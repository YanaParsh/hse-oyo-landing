import { Component } from '@angular/core';

@Component({
  selector: 'app-top-image',
  templateUrl: './top-image.component.html',
  styleUrls: ['./top-image.component.scss']
})
export class TopImageComponent {
  public scrollHostIntoView(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
