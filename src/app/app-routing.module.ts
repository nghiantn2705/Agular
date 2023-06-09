import { DeitalProductComponent } from './pages/deital-product/deital-product.component';

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LayoutClientComponent } from './Layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';

import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './pages/card/card.component';

import { AllproductComponent } from './pages/allproduct/allproduct.component';
import { BoyproductComponent } from './pages/boyproduct/boyproduct.component';
import { GirlproductComponent } from './pages/girlproduct/girlproduct.component';

import { RegisterComponent } from './pages/register/register.component';
import { CategoriesComponent } from './admin/categories/categories.component';


const routes: Routes = [
 {
  path:"",
  component:LayoutClientComponent,
  children: [
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'detail/:_id',component:DeitalProductComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'card',component:CardComponent},


    {path:'allproduct',component:AllproductComponent},
    {path:'boyproduct',component:BoyproductComponent},
    {path:'girlproduct',component:GirlproductComponent},

  


    
    
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: AdminComponent },
      { path: 'categories', component: CategoriesComponent }
    ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
