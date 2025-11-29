import { Produit } from "./produits";

export class CommandeItem extends Produit {
  quantity: number; // quantité commandée

  constructor(produit: Produit, quantity: number = 1) {
    super(
      produit.id, 
      produit.nom, 
      produit.prix, 
      produit.devise, 
      produit.categorie, 
      produit.type, 
      produit.taille, 
      produit.couleur,
      produit.description,  
      produit.imageUrl
    );
    this.quantity = quantity;
  }

  getTotal(): number {
    return this.prix * this.quantity;
  }
}
