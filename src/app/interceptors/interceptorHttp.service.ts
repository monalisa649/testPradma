import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorHttpService implements HttpInterceptor{

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    let headers: HttpHeaders;

       headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'x-application-id' : 'c14ba89d-4e8a-4ffc-be9c-77e9a207914b',
      'Authorization' : `${ token }`
  });

    /*if(token){
         headers = new HttpHeaders({
        'Content-Type' : 'application/json',
        'x-application-id' : 'c14ba89d-4e8a-4ffc-be9c-77e9a207914b',
        'Authorization' : `${ token }`
    });

    }*/




    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone);
  }
}



