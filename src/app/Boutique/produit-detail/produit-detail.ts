import { AchatService } from './../../Achat/achat-service';
import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from '../boutique-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../../Models/produits';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Loading } from "../../loading/loading";
import { MatCardActions } from "@angular/material/card";
import { CommandeItem } from '../../Models/commande';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produit-detail',
  imports: [MatIconModule, MatButtonModule, Loading, MatCardActions],
  templateUrl: './produit-detail.html',
  styleUrl: './produit-detail.css',
})
export class ProduitDetail implements OnInit{

  produit: Produit| undefined;
  selectedTaille: string | null = null;
  selectedCouleur: string | null = null;

  constructor( 
    private boutiqueService: BoutiqueService,
    private achatService: AchatService,
    private router: Router,
    private route: ActivatedRoute,
    private matSnackBar: MatSnackBar
  ){}

  ngOnInit() {
    const produitId: string | null = this.route.snapshot.paramMap.get('id')
    if(produitId){
      this.boutiqueService.getProduitById(+produitId).subscribe(
      (produit) => {
          this.produit = produit
          console.table(this.produit)
      }
    )
    // Initialiser les sélections par défaut si nécessaire
    if (this.produit?.taille && this.produit.taille.length > 0) {
      this.selectedTaille = this.produit.taille[0];
    }
    if (this.produit?.taille &&this.produit.couleur.length > 0) {
      this.selectedCouleur = this.produit.couleur[0];
    }
    }
  }

  // --- NOUVELLE MÉTHODE 'selectOption' ---
  selectOption(type: 'taille' | 'couleur', value: string): void {
    if (type === 'taille') {
      this.selectedTaille = value;
      console.log('Taille sélectionnée:', this.selectedTaille);
    } else if (type === 'couleur') {
      this.selectedCouleur = value;
      console.log('Couleur sélectionnée:', this.selectedCouleur);
    }
    // Vous pouvez ajouter ici d'autres logiques (ex: mise à jour du prix ou de l'image)
  }

  goToAchatDirect(produit: Produit){
      this.router.navigate(['achat/achat-direct', produit.id])
    }
  
    // AddToPanier
    addToPanier( product: Produit, quantity: number = 1): void {
      
      // 1. Instancier le CommandeItem avec le produit et la quantité
      const itemToAdd = new CommandeItem(product, quantity);
      // 2. Appeler la méthode du service (qui gère l'unicité et la persistance)
      this.achatService.ajouterProduit(itemToAdd);
      console.table(itemToAdd)
      
      // 3. Affichage du SnackBar (la notification)
      const message = `✅ ${product.nom} ajouté au panier !`;
      const action = 'Voir Panier';
      
      const snackBarRef = this.matSnackBar.open(message, action, {
          duration: 4000, 
          horizontalPosition: 'end', 
          verticalPosition: 'bottom',    
          panelClass: ['snackbar-success'] 
      });
  
      snackBarRef.onAction().subscribe(() => {
          this.router.navigate(['/achat/panier']);
      });
    }

  goBack(){
    this.router.navigate(['boutique/produits-list']);
  }
}
