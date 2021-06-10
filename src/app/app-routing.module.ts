import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuysComponent } from '../app/components/buys/buys.component';
import { DetailComponent } from '../app/components/detail/detail.component';
import { CartComponent } from '../app/components/cart/cart.component';

const routes: Routes = [
  {path:'',component:BuysComponent},
  {path:'details/:id',component:DetailComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
