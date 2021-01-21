import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contactForm: FormGroup;

  constructor( public _dataService : DataService) {

    this.contactForm = this.createFormGroup();


  }

  ngOnInit(): void {

    this._dataService.login().subscribe(req => console.log(req));
    console.log('este es la peticion')
  }

  get emailNoValido(){
    return this.contactForm.get('email').invalid && this.contactForm.get('email').touched
  }

  get passwordNoValido(){
    return this.contactForm.get('password').invalid && this.contactForm.get('password').touched
  }

  createFormGroup(){
    return new FormGroup({
      email: new FormControl('',[ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ]),
      password: new FormControl('', [Validators.required, Validators.minLength(5) ] ),
    });
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    console.log('Save');
  }

  enviar(){
    console.log(this.contactForm);
  }

}
