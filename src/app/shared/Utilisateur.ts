export class Utilisateur{
    nom:string;
    prenom:string;
    email:string;
    password:string;
    adresseFac:string;
    adresseLiv:string;

    constructor(){
        this.nom = "";
        this.prenom = "";
        this.email = "";
        this.password = "";
        this.adresseFac = "";
        this.adresseLiv = "";
    }

    setAdresseLiv(){
        this.adresseLiv = this.adresseFac;
    }

    UtilisateurDefaut(){
        this.nom = "mister";
        this.prenom = "test";
        this.email = "emailinutile@pouet.test";
        this.password = "1234";
        this.adresseFac = "123 Rue d'asimov 123 456 BP test mars"
        this.setAdresseLiv();
    }
}