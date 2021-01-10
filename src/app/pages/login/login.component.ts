import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  contactForm: FormGroup;
  constructor() {
  this.contactForm = this.createFormGroup();

  }

  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    console.log('Save');
  }

}
