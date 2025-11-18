import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(
    private route: Router
  ){}

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
