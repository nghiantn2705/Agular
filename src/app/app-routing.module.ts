import { Component, NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';

import { from } from 'rxjs';
import { AdminComponent } from './admin/admin/admin.component';
import { LayoutClientComponent } from './Layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
 {
  path:"", component:LayoutClientComponent,children: [
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
  
  ]
 },
 {
  path:"admin", component:LayoutAdminComponent,children: [
    {path:"",redirectTo:'admin',pathMatch:'full'},
    {path:'admin',component:AdminComponent}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
