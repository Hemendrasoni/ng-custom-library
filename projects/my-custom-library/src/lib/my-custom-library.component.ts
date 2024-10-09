import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'lib-my-custom-library',
  standalone: false,
  template: `
    <mat-toolbar color="primary">
  My Custom Library
</mat-toolbar>
<mat-button-toggle-group>
  <mat-button-toggle value="left">Left</mat-button-toggle>
  <mat-button-toggle value="center">Center</mat-button-toggle>
  <mat-button-toggle value="right">Right</mat-button-toggle>
</mat-button-toggle-group>
  `,
  styles: ``
})
export class MyCustomLibraryComponent {

}
