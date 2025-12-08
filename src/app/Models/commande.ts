import { Produit } from "./produits";

export class CommandeItem extends Produit {
  quantity: number; // quantité commandée
  prixTotal: number;
  tailleSelectionnee: string | string[]; 
  couleurSelectionnee: string | string[];

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
    this.prixTotal = this.quantity * this.prix
    this.tailleSelectionnee = Array.isArray(produit.taille) ? produit.taille[0] : produit.taille;
    this.couleurSelectionnee = Array.isArray(produit.couleur) ? produit.couleur[0] : produit.couleur;
  }
}
