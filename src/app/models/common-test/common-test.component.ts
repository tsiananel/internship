import { Component, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.scss'],
})
export class CommonTestComponent {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  setTabIndex(ind: number): void {
    if (this.tabGroup !== null && this.tabGroup.selectedIndex !== null)
      this.tabGroup.selectedIndex += ind;
  }
}
