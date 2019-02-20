import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products=[
    {position:1,Code:'A001',Name:"Prod 1",PurchasePrice:100,SalePrice:120},
    {position:2,Code:'A002',Name:"Prod 2",PurchasePrice:200,SalePrice:220},
    {position:3,Code:'A003',Name:"Prod 3",PurchasePrice:300,SalePrice:320}
  ]
  constructor() { }
  getProducts(){
    return this.products;
  }
}
