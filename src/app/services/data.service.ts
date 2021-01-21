import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

//Models
import { UserI } from '../models/user.model';
import {  Product } from '../models/product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    public url = 'https://blitz-dev1.azurewebsites.net/ms-user/api/users/login';
  constructor(
    private http : HttpClient,

    ) { }

login(form:UserI):Observable<any>{

  return this.http.post( this.url , form);

}

getProducts(){

}

newProduct(){

}

}
