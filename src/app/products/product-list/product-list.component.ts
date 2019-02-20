import {Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  columnNames = [
    {id: "position", value: "No."}, 
    {id: "Code",value: "Code"},
    {id: "Name",value: "Name"},
    {id: "PurchasePrice",value: "PurchasePrice"},
    {id: "SalePrice",value: "SalePrice"}
  ];

  displayedColumns:string[]=this.columnNames.map(x => x.id);
  dataSource=new MatTableDataSource(this.productService.getProducts());

  @ViewChild(MatSort) sort: MatSort;
  constructor(private productService:ProductService) { 
  }

  ngOnInit() {
    this.dataSource.sort=this.sort;
  }
}