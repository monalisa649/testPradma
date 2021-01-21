import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

import { UserI } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contactForm = new FormGroup({
    email: new FormControl('',[ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ]),
    password: new FormControl('', [Validators.required, Validators.minLength(5) ] ),
  })


  constructor( public _dataService : DataService) {


  }

  ngOnInit(): void {


  }

  get emailNoValido(){
    return this.contactForm.get('email').invalid && this.contactForm.get('email').touched
  }

  get passwordNoValido(){
    return this.contactForm.get('password').invalid && this.contactForm.get('password').touched
  }


  login(form:UserI){
    this._dataService.login(form).subscribe(res=> {
      console.log(res);
    })
  }

  onResetForm(){
    this.contactForm.reset();
  }





}
