import { Component, OnInit } from '@angular/core';
import { Produit } from '../../Models/produits';
import { Route } from '@angular/router';
import { BoutiqueService } from '../boutique-service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PanierService } from '../panier-service';
import { Panier } from '../panier/panier';

@Component({
  selector: 'app-produits-list',
  imports: [CommonModule, MatCardModule, MatButtonModule, Panier],
  templateUrl: './produits-list.html',
  styleUrl: './produits-list.css',
  providers: [BoutiqueService]
})
export class ProduitsList implements OnInit{

  produitList: Produit[];

  constructor(
    private boutiqueService: BoutiqueService,
    public panierService: PanierService
  ){}

  ngOnInit() {
    this.boutiqueService.getProduitsList().subscribe(
      (produitList) => {
        this.produitList = produitList;
        console.table(this.produitList)
      }
    )
  }

}
