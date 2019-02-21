import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  public myForm:FormGroup;
  public submitted:boolean;
  public event:any[]=[];
  product:any;
  constructor(private productService:ProductService,private _fb:FormBuilder) { }
  ngOnInit() {
    this.myForm=this._fb.group({
      Code:[""],
      Name:[""],
      PurchasePrice:[""],
      SalePrice:[""]
    })
    this.product=this.productService.getProduct("A002");
    console.log(this.product);
  }
  saveProduct(myForm){
    this.submitted=true;
    console.log(myForm.value);
  }
}
