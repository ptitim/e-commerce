import { CatalogueComponent } from './front/catalogue/catalogue.component';
import { Routes } from '@angular/router/router';
import { FrontComponent } from './front/front.component';

export const frontRouteur: Routes = [
    
    {
        path: 'front', component: FrontComponent,
        children: [
            { path: 'catalogue', component: CatalogueComponent }
        ]
    }
]