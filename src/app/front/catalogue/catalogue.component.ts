import { Component, OnInit } from '@angular/core';
import { IProduit } from '../../shared/Iproduit';
import { Produit } from '../../shared/Produit';
import { ProduitService } from '../../back-office/services/ServiceProduit';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  listProduits:Array<IProduit>;
  
  constructor(private serviceProduit:ProduitService) {
    
   }

  ngOnInit() {
    this.serviceProduit.getAllProduit().subscribe((rep) => this.listProduits = rep, (error)=> console.log("error: ", error)) ;
  }

}
