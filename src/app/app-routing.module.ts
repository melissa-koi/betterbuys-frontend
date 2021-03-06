import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuysComponent } from '../app/components/buys/buys.component';
import { DetailComponent } from '../app/components/detail/detail.component';
import { CartComponent } from '../app/components/cart/cart.component';
import { AddressComponent } from '../app/components/address/address.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { LoginComponent } from '../app/components/login/login.component';

const routes: Routes = [
  {path:'',component:BuysComponent},
  {path:'details/:id',component:DetailComponent},
  {path:'cart',component:CartComponent},
  {path:'address',component:AddressComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
