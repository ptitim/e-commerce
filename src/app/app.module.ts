import { MaterialModule } from '@angular/material';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './front/login/login.component';
import { InscritpionComponent } from './front/inscritpion/inscritpion.component';
import { MonCompteComponent } from './back-office/mon-compte/mon-compte.component';
import { CatalogueComponent } from './front/catalogue/catalogue.component';
import { frontRouteur } from './app.frontRouter';
import { ErrorComponent } from './error/error.component';
import { backRouteur } from './app.backRouteur';
import { FrontComponent } from './front/front.component';
import { BackOfficeComponent } from './back-office/back-office.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscritpionComponent,
    MonCompteComponent,
    CatalogueComponent,
    ErrorComponent,

    FrontComponent,

    BackOfficeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
        MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(frontRouteur),
    RouterModule.forRoot(backRouteur),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
