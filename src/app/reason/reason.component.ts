import { Component, OnInit } from '@angular/core';
interface Reason {
  title: string;
  icon: string;
}
@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.scss']
})
export class ReasonComponent {
  reasons: Reason[] = [
    { title: 'Lowest price', icon: 'local_offer' },
    { title: 'Free US shipping', icon: 'local_shipping' },
    { title: '30 days return', icon: 'settings_back' }
  ];
  public scrollHostIntoView(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
