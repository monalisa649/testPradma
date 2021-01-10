import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

//Models
import { User } from '../models/user.model';
import {  Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http : HttpClient,
    private headers : HttpHeaders
    ) { }

login(){



}

getProducts(){

}

newProduct(){

}

}
