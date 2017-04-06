import { ProduitService } from '../services/ServiceProduit';
import { Directive } from '@angular/core/core';
import { Utilisateur } from '../../shared/Utilisateur';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {
  formulaire: FormGroup;
  utilisateur:Utilisateur;

  constructor(private fo: FormBuilder, private serviceP:ProduitService) {
    this.utilisateur = new Utilisateur();
    
  }

  ngOnInit() {
    this.utilisateur.UtilisateurDefaut();
    this.formulaire = this.fo.group({
      nom:        [this.utilisateur.nom, [Validators.required , Validators.minLength(3)]],
      prenom:     [this.utilisateur.prenom, [Validators.required,]],
      email:      [this.utilisateur.email ,[Validators.required, Validators.email]],
      password:   ['', []],
      password2:  ['', []],
      adresseFac: [this.utilisateur.adresseFac, [Validators.required]],
      adresseLiv: [this.utilisateur.adresseLiv ,[]]
    });
  }

  modifier() {
    console.log(this.formulaire);
  }
}
