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
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { RouterTestingModule } from "@angular/router/testing";
import { baseURL } from '../shared/baseurl';
import { ViewordersComponent } from './vieworders.component';
import { Observable, of } from 'rxjs';
import { Orders } from '../shared/order';
import { OrderService } from '../services/orderservice.service';

describe('ViewordersComponent', () => {
  let component: ViewordersComponent;
  let fixture: ComponentFixture<ViewordersComponent>;

  beforeEach(async(() => {
    const mockservice = {
      getOrders: function(): Observable<any[]> {
        return of(Orders[0]);
      }
    };
    TestBed.configureTestingModule({
      declarations: [ ViewordersComponent ],
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
        MatCheckboxModule
      ],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      },{provide: 'baseURL', useValue: baseURL},
      { provide: OrderService, useValue: mockservice}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
