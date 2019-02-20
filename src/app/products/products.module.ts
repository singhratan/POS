import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { NewProductComponent } from '../Products/new-product/new-product.component';
import { EditProductComponent } from '../Products/edit-product/edit-product.component';
import { ProductListComponent } from '../Products/product-list/product-list.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [NewProductComponent, EditProductComponent, ProductListComponent],
  imports: [CommonModule,ProductsRoutingModule],
  providers:[ProductService]
})
export class ProductsModule { }
