import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart.component';
import { baseURL } from '../shared/baseurl';
import { Cart } from '../shared/cart';
import { CartService } from '../services/cart.service';
import { Observable, of } from 'rxjs';
describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    const mockservice = {
      getCart: function(): Observable<any> {
        return of(Cart);
      }
    };
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [HttpClientModule],
      providers: [{provide: 'baseURL', useValue: baseURL},{ provide: CartService, useValue: mockservice
       },]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
