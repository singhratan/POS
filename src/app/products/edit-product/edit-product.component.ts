import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
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
  public Code:string='';
  product:any;
  constructor(private productService:ProductService,private _fb:FormBuilder,private route:ActivatedRoute,private router:Router) { 
    this.Code = this.route.snapshot.params['id'];
    var data=this.productService.getProduct(this.Code);
    this.product= data;
  }
  ngOnInit() {
    this.myForm=this._fb.group({
      Code:[this.product[0].Code],
      Name:[this.product[0].Name],
      PurchasePrice:[this.product[0].PurchasePrice],
      SalePrice:[this.product[0].SalePrice]
    })
  }
  saveProduct(myForm){
    this.submitted=true;
    console.log(myForm.value);
  }
  backToList(){
    this.router.navigateByUrl('/productlist');  
  }
}
