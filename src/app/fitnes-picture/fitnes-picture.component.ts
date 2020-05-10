import { Component } from '@angular/core';
@Component({
  selector: 'app-fitnes-picture',
  templateUrl: './fitnes-picture.component.html',
  styleUrls: ['./fitnes-picture.component.scss']
})
export class FitnesPictureComponent {
  public scrollHostIntoView(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
