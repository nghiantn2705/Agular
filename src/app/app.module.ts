import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';


import { AddComponent } from './admin/add/add.component';
import { AdminComponent } from './admin/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
// import { AddComponent } from './admin/add/add.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { HeaderAdminComponent } from './component/header-admin/header-admin.component';
import { LayoutClientComponent } from './Layout/layout-client/layout-client.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UsersComponent } from './admin/users/users.component';
import { DeitalProductComponent } from './pages/deital-product/deital-product.component';

// import { LoginComponent } from './pages/login/login.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';
// import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    AddComponent,
    AdminComponent,
    LayoutAdminComponent,
    HeaderAdminComponent,
    LayoutClientComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    DeitalProductComponent,



   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatBadgeModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
