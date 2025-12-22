import { Component, inject, signal } from '@angular/core';
import { AchatService } from '../achat-service';
import { ProduitAchete } from '../../Models/produitAchete';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Loading } from "../../loading/loading";

@Component({
  selector: 'app-historique-detail-achat',
  imports: [MatIconModule, CommonModule, Loading],
  templateUrl: './historique-detail-achat.html',
  styleUrl: './historique-detail-achat.css',
})
export class HistoriqueDetailAchat {
  // Services
  private route = inject(ActivatedRoute);
  private router= inject(Router);
  private achatsService = inject(AchatService);

  // Etat (Signals)
  commandes = signal<ProduitAchete| undefined>(undefined);
  chargement = signal<boolean>(false);

  ngOnInit(): void {
    const achatId = Number(this.route.snapshot.paramMap.get('achatId'));
    
    if (achatId) {
      this.chargerLeProduit(achatId);
    }
  }

  private chargerLeProduit(AchatId: number): void {
    this.chargement.set(true);
    
    // On appelle le service pour récupérer l'historique des achats
    this.achatsService.getUserHistoryAchatById(AchatId).subscribe({
      next: (data: ProduitAchete) => {
        this.commandes.set(data);
        this.chargement.set(false);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des achats", err);
        this.chargement.set(false);
      }
    });
  }

  retour(){
    this.router.navigate(['achat/historique-achats']);
  }
}

