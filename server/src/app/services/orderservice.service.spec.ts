import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderService } from './orderservice.service';

describe('OrderserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterTestingModule.withRoutes([])],

  }));

  it('should be created', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service).toBeTruthy();
  });
});
