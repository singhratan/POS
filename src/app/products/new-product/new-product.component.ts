import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/models/product';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent  implements OnInit{
  public myForm:FormGroup;
  public submitted:boolean;
  public event:any[]=[];
  constructor(private _fb:FormBuilder) { }
  ngOnInit() {
    this.myForm=this._fb.group({
      Code:[""],
      Name:[""],
      PurchasePrice:[""],
      SalePrice:[""]
    })
  }
  saveProduct(myForm){
    this.submitted=true;
    console.log(myForm.value);
  }
}
