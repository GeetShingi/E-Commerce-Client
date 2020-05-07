import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminproductdetailComponent } from './adminproductdetail.component';
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

describe('AdminproductdetailComponent', () => {
  let component: AdminproductdetailComponent;
  let fixture: ComponentFixture<AdminproductdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [{provide: 'baseURL', useValue: baseURL}],
      declarations: [ AdminproductdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproductdetailComponent);
    component = fixture.componentInstance;
    component.product = {
      _id : "5e8052b3d33527b60d406532",
      image : [
        "74.JPG",
        "75.JPG",
        "76.JPG"
      ],
      name : "Fuchsia coloured banarasi brocade anarkali kurta with gharchola pattern in gold",
      description : "Fuchsia coloured banarasi brocade anarkali kurta with gharchola pattern in gold. The gharchola pattern also alternates in two different shades of fuchsia colour. Kurta is adorned with feet length height and flare falling fabric lending it grace and comfort. Design on three quarter sleeves matches with the skirt design with plain chest - buttoned up Chinese collar. A plain dupatta with matching border would also be part of the dress. The kurta is an easy wear for any party/festival.",
            price : "3999",
            xsmall : 10,
            small : 11,
            medium : 10,
            large : 10,
            xlarge : 10,
            xxlarge : 10,
            xxxlarge : 5,
            comments: []
        };
        fixture.detectChanges();
  });

  it('should create', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
        expect(component).toBeTruthy();
    });
  }));
});
