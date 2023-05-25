import { Component, NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LayoutClientComponent } from './Layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { DeitalProductComponent } from './pages/deital-product/deital-product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
 {
  path:"", component:LayoutClientComponent,children: [
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'deital',component:DeitalProductComponent},
    {path:'login',component:LoginComponent},
  
    
  ]
 },
 {
  path:"admin", component:LayoutAdminComponent,children: [
    {path:"",redirectTo:'admin',pathMatch:'full'},
    {path:'admin',component:AdminComponent}
  ]
 }
 ,  {path:"**",component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
