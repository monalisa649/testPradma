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

    ) { }

login(){

  return this.http.get( 'https://blitz-dev1.azurewebsites.net/ms-user/api/users/login');

}

getProducts(){

}

newProduct(){

}

}
