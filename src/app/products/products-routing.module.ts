import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'productlist',component:ProductListComponent},
  {path:'new',component:NewProductComponent},
  {path:'edit',component:EditProductComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations:[
    ProductListComponent,
    NewProductComponent,
    EditProductComponent
  ],
  exports: [
    //RouterModule
    ProductListComponent,
    NewProductComponent,
    EditProductComponent
  ]
})
export class ProductsRoutingModule { }
