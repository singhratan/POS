import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MatFormFieldModule,MatInputModule, MatCardModule, MatOptionModule, MatSelectModule, MatButtonModule, MatDatepickerModule, MatRadioModule, MatTooltipModule} from '@angular/material';

const routes: Routes = [
  {path:'productlist',component:ProductListComponent},
  {path:'new',component:NewProductComponent},
  {path:'edit',component:EditProductComponent},
];
const module=[
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatOptionModule,
  MatSelectModule,
  MatButtonModule,
  MatDatepickerModule,
  MatRadioModule,
  MatTooltipModule
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    module
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
