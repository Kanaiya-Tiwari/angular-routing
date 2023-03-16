import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthserviceService } from '../core/authservice.service';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';


import { ProductListComponent } from './component/product-list/product-list.component';


const routes: Routes = [
  {path:"",redirectTo:'product-list',pathMatch:'full'},
  {path:'product-list',component:ProductListComponent,canActivate:[AuthserviceService]},
  {path:'product-list/:id',component:ProductDetailComponent,canActivate:[AuthserviceService]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
