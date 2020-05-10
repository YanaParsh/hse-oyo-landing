import { ChangeDetectorRef, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Landing';

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  @HostListener('window:resize')
  public processResize(): void {
    this.changeDetectorRef.markForCheck();
  }
}
