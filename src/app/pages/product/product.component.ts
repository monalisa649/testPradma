
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    form: FormGroup;



  constructor( ) {

    this.form = this.crearForm();


  }

  ngOnInit(): void {
  }

  get codigoNoValido(){
    return this.form.get('codigo').invalid && this.form.get('codigo').touched
  }

  get nombreNoValido(){
    return this.form.get('nombre').invalid && this.form.get('nombre').touched
  }

  get valorNoValido(){
    return this.form.get('valorUni').invalid && this.form.get('valorUni').touched
  }

  get ivaNoValido(){
    return this.form.get('iva').invalid && this.form.get('iva').touched
  }

  crearForm(){
    return new FormGroup({
      codigo : new FormControl ('', [Validators.required, Validators.pattern('^[0-9]+'), Validators.minLength(3)]),
      nombre : new FormControl ('', [Validators.required, Validators.minLength(3)]),
      valorUni : new FormControl ('',[Validators.required, Validators.pattern('^[0-9]+')]),
      iva : new FormControl ('', Validators.required),
    });
  }

  guardar(){
    console.log(this.form);
  }

}
