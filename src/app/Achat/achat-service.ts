import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CommandeItem } from '../Models/commande'; // Assurez-vous du bon chemin
import { Produit } from '../Models/produits'; // Assurez-vous d'importer la classe/interface Produit
import { BoutiqueService } from '../Boutique/boutique-service'; 

@Injectable({
  providedIn: 'root',
})
export class AchatService {

  // BehaviorSubject est initialisé avec la fonction qui charge le panier depuis le local storage
  private itemsSubject = new BehaviorSubject<CommandeItem[]>([]);
  items$: Observable<CommandeItem[]> = this.itemsSubject.asObservable();

  constructor(private boutiqueService: BoutiqueService) { }

  // --- LOGIQUE DE PERSISTANCE ---

  // --- MÉTHODES DU SERVICE ---

  getProduitById(produitId: number) {
    return this.boutiqueService.getProduitById(produitId);
  }

  /**
   * LOGIQUE : Ajoute un article ou incrémente sa quantité.
   * Assure l'immutabilité et la persistance.
   */
  ajouterProduit(item: CommandeItem) {
    const currentItems = this.itemsSubject.value;
    const existingIndex = currentItems.findIndex(p => p.id === item.id);
    // On travaille sur une copie pour respecter l'immutabilité
    let updatedItems = [...currentItems]; 

    if (existingIndex > -1) {
      // CAS 1: L'article existe déjà.
      console.log(`Produit ID ${item.id} déjà présent. Non ajouté. Sa quantité sera modifiée dans le panier.`);
      return;
    } else {
      // CAS 2: L'article est NOUVEAU (Ajout)
      updatedItems.push(item);
    }

    // Publier le nouvel état
    this.itemsSubject.next(updatedItems);
    
    // Persister la nouvelle liste
  }

  // mise en jour du panier (utilisé dans la vue panier pour changer la quantité directement)
  updateItems(items: CommandeItem[]) {
    // Si la liste complète est mise à jour, on publie et on persiste
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

  // Observable pour le total du panier (optionnel mais utile)
  totalPanier$ = this.items$.pipe(
    map(items => items.reduce((total, item) => total + item.getTotal(), 0))
  );
}