import { TestBed, inject } from '@angular/core/testing';

import { ZipcloudService } from './zipcloud.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ZipcloudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ZipcloudService]
    });
  });

  it('should be created', inject([ZipcloudService], (service: ZipcloudService) => {
    expect(service).toBeTruthy();
  }));
});
