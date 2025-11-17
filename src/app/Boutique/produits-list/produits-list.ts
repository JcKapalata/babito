import { Component, OnInit } from '@angular/core';
import { Produit } from '../../Models/produits';
import { Route } from '@angular/router';
import { BoutiqueService } from '../boutique-service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-produits-list',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './produits-list.html',
  styleUrl: './produits-list.css',
  providers: [BoutiqueService]
})
export class ProduitsList implements OnInit{

  produitList: Produit[];

  constructor(
    private boutiqueService: BoutiqueService
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
