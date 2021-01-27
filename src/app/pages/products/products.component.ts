import { Component, OnInit } from '@angular/core';
import { ProductsI } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products : ProductsI;
  public lista : any[];

  constructor(private _dataService : DataService) { }

  ngOnInit(): void {

    this._dataService.getProducts()
    .subscribe((res : ProductsI )=> {
    console.log(res);
    this.products = res;
    })

  }

}
