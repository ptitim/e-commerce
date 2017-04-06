import { IProduit } from './Iproduit';
export class Produit implements IProduit{
    _id:string;
    libelle:string;
    prix:number;
    stock:number;
    categorie:string;

}