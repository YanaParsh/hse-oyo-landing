import { Component, OnInit } from '@angular/core';

interface Difference {
  title: string;
}

@Component({
  selector: 'app-differences',
  templateUrl: './differences.component.html',
  styleUrls: ['./differences.component.scss']
})
export class DifferencesComponent {
  differences: Difference[] = [
    { title: 'SpiraFlex resistance replaces bulky weights and health club equipment' },
    { title: 'Works both sides of muscle groups' },
    { title: 'DoubleFlex activation burns calories faster' },
    { title: 'Ditch the dangerous bands' },
    { title: 'Lightweight and folds up for travel' }
  ];
}
