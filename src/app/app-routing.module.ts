import { Component, NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { HomeComponent } from './pages/home/home.component';

import { AdminComponent } from './admin/admin/admin.component';
import { LayoutClientComponent } from './Layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { CartComponent } from './shopingcart/cart/cart.component';
import { PagenotfoundComponent } from './pages/notfound/pagenotfound/pagenotfound.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';

const routes: Routes = [
 {
  path:"", component:LayoutClientComponent,children: [
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:"cart/:pro", component:CartComponent},
    {path:"detail", component:DetailProductComponent}
  ]
 },
 {
  path:"admin", component:LayoutAdminComponent,children: [
    {path:"",redirectTo:'admin',pathMatch:'full'},
    {path:'admin',component:AdminComponent}
  ]
 },
 {
  path:"**", component: PagenotfoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
