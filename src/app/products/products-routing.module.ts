import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';

import {MatFormFieldModule,MatInputModule, MatCardModule, MatOptionModule, 
  MatSelectModule, MatButtonModule, MatDatepickerModule, MatRadioModule, 
  MatTooltipModule, MatTableModule,MatPaginatorModule, MatSortModule
} from '@angular/material';

import {ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common';
const routes: Routes = [
  {path:'productlist',component:ProductListComponent},
  {path:'new',component:NewProductComponent},
  {path:'edit',component:EditProductComponent},
];
const module=[
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatOptionModule,
  MatSelectModule,
  MatButtonModule,
  MatDatepickerModule,
  MatRadioModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    module,
    CommonModule
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
    EditProductComponent,
    module
  ]
})
export class ProductsRoutingModule { }
