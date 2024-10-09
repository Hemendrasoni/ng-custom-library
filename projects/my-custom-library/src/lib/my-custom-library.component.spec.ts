import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomLibraryComponent } from './my-custom-library.component';

describe('MyCustomLibraryComponent', () => {
  let component: MyCustomLibraryComponent;
  let fixture: ComponentFixture<MyCustomLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCustomLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCustomLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
