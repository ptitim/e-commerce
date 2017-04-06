import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Utilisateur } from '../../shared/Utilisateur';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    utilisateur: Utilisateur;

    constructor(private fo: FormBuilder, private router:Router) {
        this.utilisateur = new Utilisateur();
        this.utilisateur.UtilisateurDefaut();
    }

    ngOnInit() {
        this.form = this.fo.group({
            email: '',
            password: ''
        })
    }

    connexion() {
        if (this.form.get('email').value === this.utilisateur.email && this.form.get('password').value === this.utilisateur.password) {
            this.router.navigateByUrl('front/catalogue');
        }else{
            console.log("Wrong password or username : ", this.form.get('email').value , " pass : ",this.form.get('password').value );
        }
    }
}
