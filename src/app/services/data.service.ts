import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

//Models
import { UserI } from '../models/user.model';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {

    public url = 'https://blitz-dev1.azurewebsites.net/ms-user/api/users/login';



    constructor( private http : HttpClient ) {

     /* this.headers.append("Authorization", "Bearer" + localStorage.getItem('token'));*/
     }

login(form:UserI):Observable<any>{

  return this.http.post<any>( this.url , form);

}

getProducts(){
  return this.http.get('https://blitz-dev1.azurewebsites.net/ms-e-bill/api/product?page=1')
  .pipe(map(res => {
    return res['results'].filter(item => item.url_image != "www.goog.com")
  }));
}

newProduct(){

}

}
