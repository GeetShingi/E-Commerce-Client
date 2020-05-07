import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { RouterTestingModule } from "@angular/router/testing";
import { baseURL } from '../shared/baseurl';
import { OrdersComponent } from './orders.component';
import { Orders } from '../shared/order';
import { Observable, of } from 'rxjs';
import { OrderService } from '../services/orderservice.service';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async(() => {
    const mockservice = {
      getOrder: function(): Observable<any> {
        return of(Orders);
      }
    };
    TestBed.configureTestingModule({
      declarations: [ OrdersComponent ],
      imports: [FormsModule, 
        RouterTestingModule,
        MatInputModule, 
        ReactiveFormsModule, 
        MatFormFieldModule, 
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
      ],
      providers: [{provide: 'baseURL', useValue: baseURL},{ provide: OrderService, useValue: mockservice}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
