import { Component } from '@angular/core';

@Component({
  selector: 'app-panier',
  imports: [],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
  panier = [
    { nom: 'Coca-Cola 33cl', prix: 2, quantite: 1, image: 'assets/coca.jpg' },
    { nom: 'Fanta Orange 50cl', prix: 3, quantite: 2, image: 'assets/fanta.jpg' }
  ];

  increment(item: any) {
    item.quantite++;
  }

  decrement(item: any) {
    if (item.quantite > 1) item.quantite--;
  }

  supprimer(item: any) {
    this.panier = this.panier.filter(p => p !== item);
  }

  getTotal() {
    return this.panier.reduce((sum, item) => sum + item.prix * item.quantite, 0);
  }

}
