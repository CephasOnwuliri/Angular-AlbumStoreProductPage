import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import {http response} from '@angular/http';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
