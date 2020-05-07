import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SignupComponent} from '../signup/signup.component';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  products: Product[];
  username: string = undefined;
  subscription: Subscription;
  errMess : string;

  constructor(public dialog: MatDialog,
    private authService: AuthService , private productservice : ProductService ) { }

    ngOnInit() {
      this.authService.loadUserCredentials();
      this.subscription = this.authService.getUsername()
        .subscribe(name => { console.log(name); this.username = name; });
      this.productservice.getProducts().subscribe(products => this.products = products, errmess => this.errMess = <any>errmess);

    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    openLoginForm() {
      const loginRef = this.dialog.open(LoginComponent, {width: '500px', height: '450px'});

      loginRef.afterClosed()
        .subscribe(result => {
          console.log(result);
        });
    }

    openSignUpForm() {
      const signupRef = this.dialog.open(SignupComponent, {width: '500px', height: '450px'});

      signupRef.afterClosed()
        .subscribe(result => {
          console.log(result);
        });
    }

    logOut() {
      this.username = undefined;
      this.authService.logOut();
    }

}
