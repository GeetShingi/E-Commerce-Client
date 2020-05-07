import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
  }));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });
});
