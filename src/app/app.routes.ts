import { Routes } from '@angular/router/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './front/login/login.component';
import { InscritpionComponent } from './front/inscritpion/inscritpion.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inscription', component: InscritpionComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
]