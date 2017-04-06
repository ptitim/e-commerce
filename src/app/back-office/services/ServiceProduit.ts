import { IProduit } from '../../shared/Iproduit';
import { WS_URL_PRODUIT } from '../../shared/dev-config';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProduitService {
    UrlAddProduit: string = WS_URL_PRODUIT + '/add';
    UrlRemoveProduit: string = WS_URL_PRODUIT + '/remove';
    UrlUpdateProduit: string = WS_URL_PRODUIT + '/Update';

    constructor(private http:Http) {}
    
    getAllProduit(){
        return this.http.get(WS_URL_PRODUIT).map((rep) => rep.json());
    }


}