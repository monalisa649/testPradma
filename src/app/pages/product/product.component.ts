
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    form: FormGroup;


  constructor( private fb: FormBuilder) {

    this.crearForm();

  }

  ngOnInit(): void {
  }

  crearForm(){
    this.form = this.fb.group({
      codigo : [''],
      nombre : [''],
      valorUni : [''],
      iva : ['']
    });
  }

  guardar(){
    console.log(this.form);
  }

}
