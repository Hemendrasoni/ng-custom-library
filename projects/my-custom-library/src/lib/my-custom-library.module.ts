import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgModule } from '@angular/core';
import { MyCustomLibraryComponent } from './my-custom-library.component';

@NgModule({
    declarations: [MyCustomLibraryComponent],
    imports: [MatToolbarModule, MatButtonToggleModule],
    exports: [MyCustomLibraryComponent],
})
export class MyCustomLibraryModule { }