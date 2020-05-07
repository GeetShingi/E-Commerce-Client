import { Routes } from '@angular/router';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { ProductsComponent } from '../products/products.component';
import { HomeComponent } from '../home/home.component';
import { CartComponent } from '../cart/cart.component';
import { AddproductsComponent } from '../addproducts/addproducts.component';
import { ListproductsComponent} from '../listproducts/listproducts.component';
import { AdminproductdetailComponent } from '../adminproductdetail/adminproductdetail.component';
// import { CheckoutComponent } from '../checkout/checkout.component';
import { OrdersComponent } from '../orders/orders.component';
import { ViewordersComponent } from '../vieworders/vieworders.component';

export const routes: Routes = [
  { path: 'products',  component: ProductsComponent },
  { path: 'productdetail/:id', component: ProductdetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'cart', component: CartComponent},
  { path: 'addproducts', component: AddproductsComponent},
  { path: 'viewproducts', component: ListproductsComponent},
  { path: 'adminproductdetail/:id', component: AdminproductdetailComponent},
  // { path: 'checkout', component: CheckoutComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'vieworders', component: ViewordersComponent}
];
