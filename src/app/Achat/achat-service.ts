import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CommandeItem } from '../Models/commande';
import { BoutiqueService } from '../Boutique/boutique-service';

@Injectable({
  providedIn: 'root',
})
export class AchatService {

  // private showPanierSubject = new BehaviorSubject<boolean>(false);
  // showPanier$ = this.showPanierSubject.asObservable();

  private itemsSubject = new BehaviorSubject<CommandeItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor(private boutiqueService: BoutiqueService) { }

  //go To commande
  getProduitById(produitId: number) {
    return this.boutiqueService.getProduitById(produitId);
  }

  // Ajouter un produit
  ajouterProduit(item: CommandeItem) {
    const currentItems = this.itemsSubject.value;

    const existing = currentItems.find(p => p.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      currentItems.push(item);
    }

    this.itemsSubject.next([...currentItems]);
  }

  // mise en jour du panier
  updateItems(items: CommandeItem[]) {
    this.itemsSubject.next([...items]);
  }

  // vide le panier
  viderPanier() {
    this.itemsSubject.next([]);
  }

  // recupere la nombre produit
  nombreProduits$ = this.items$.pipe(
    map(items => items.length)
  );
}
