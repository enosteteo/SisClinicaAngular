import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });
  });

  it('should exist', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

});
