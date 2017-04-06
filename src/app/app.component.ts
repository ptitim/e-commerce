import { Component } from '@angular/core';
import { ProduitService } from './back-office/services/ServiceProduit';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  templateUrl: './app.component.html',
  providers: [ProduitService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
