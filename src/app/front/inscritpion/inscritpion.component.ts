import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscritpion',
  templateUrl: './inscritpion.component.html',
  styleUrls: ['./inscritpion.component.css']
})
export class InscritpionComponent implements OnInit {
  formulaire:FormGroup;
  constructor(private fo:FormBuilder) { }

  ngOnInit() {
    this.formulaire = this.fo.group({
      nom: [, [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required]],
      email: ['' ,[Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
      adresseFac: ['', [Validators.required]],
      adresseLiv: [ '',[]]
    },{
    validator: this.confirmationmdp
  });
  }

  private confirmationmdp(form:FormGroup):{[key:string]:any} {
    if(form.get('password').value === form.get('password2').value ){
      return null;
    }else
    return {notSamePassword: true}

  }

  inscription(){
    console.log(this.formulaire);
  }
}
