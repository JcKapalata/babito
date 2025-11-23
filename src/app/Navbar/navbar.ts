import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { AchatService } from '../Achat/achat-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    RouterModule, 
    AsyncPipe
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  nombreProduits$;

  constructor(
    private route: Router,
    private achatService: AchatService
  ){
    this.nombreProduits$ = this.achatService.nombreProduits$;
  }

  goToAcceuil(){
    this.route.navigate(['acceuil']);
  }

  goToProduitList(){
    this.route.navigate(['boutique/produits-list']);
  }

  goToConnexion(){
    this.route.navigate(['auth/connexion']);
  }

  goToPannier(){
    this.route.navigate(['achat/panier']);
  }
}
