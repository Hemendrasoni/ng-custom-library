import { TestBed } from '@angular/core/testing';

import { MyCustomLibraryService } from './my-custom-library.service';

describe('MyCustomLibraryService', () => {
  let service: MyCustomLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCustomLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
