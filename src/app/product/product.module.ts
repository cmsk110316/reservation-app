import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PuroductDetailComponent } from './puroduct-detail/puroduct-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { 
    path: 'products', component:ProductComponent, 
    children:[
      { path: '', component: ProductListComponent },
      { path: ':productId', component: PuroductDetailComponent },
    ]
  }
];


@NgModule({
  declarations: [
    ProductComponent,
   PuroductDetailComponent,
   ProductListComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
