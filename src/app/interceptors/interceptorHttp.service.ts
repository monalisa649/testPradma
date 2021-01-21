import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorHttpService implements HttpInterceptor{

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'x-application-id' : 'c14ba89d-4e8a-4ffc-be9c-77e9a207914b'

    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone);
  }
}



