import { Component, computed, inject, signal } from '@angular/core';
import { ProduitAchete } from '../../Models/produitAchete';
import { CommonModule } from '@angular/common';
import { AchatService } from '../achat-service';
import { Loading } from "../../loading/loading";
import { Router } from '@angular/router';

@Component({
  selector: 'app-historique-achat',
  imports: [CommonModule, Loading],
  templateUrl: './historique-achat.html',
  styleUrl: './historique-achat.css',
})
export class HistoriqueAchat {
  // Services
  private achatsService = inject(AchatService);
  private router = inject(Router);

  // Etat (Signals)
  commandes = signal<ProduitAchete[]>([]);
  chargement = signal<boolean>(false);
  filtreStatut = signal<string>('tous');

  // Signal intelligent qui trie par date ET filtre par statut
  commandesTrieesEtFiltrees = computed(() => {
    let liste = [...this.commandes()];

    // 1. Filtrage
    if (this.filtreStatut() !== 'tous') {
      liste = liste.filter(a => a.status.toLowerCase() === this.filtreStatut().toLowerCase());
    }

    // 2. Tri par date (le plus récent en premier)
    return liste.sort((a, b) => {
      return new Date(b.dateAchat).getTime() - new Date(a.dateAchat).getTime();
    });
  });

  ngOnInit(): void {
    this.chargerDonnees();
  }

  // Méthode pour changer le filtre
  changerFiltre(nouveauStatut: string) {
    this.filtreStatut.set(nouveauStatut);
  }

  private chargerDonnees(): void {
    this.chargement.set(true);
    
    // On appelle le service pour récupérer l'historique des achats
    this.achatsService.getUserHistoryAchat(1).subscribe({
      next: (data) => {
        this.commandes.set(data);
        this.chargement.set(false);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des achats", err);
        this.chargement.set(false);
      }
    });
  }

  goToDetailsAchat(achatId: number): void {
    // Logique de navigation vers les détails de l'achat
    console.log(`Naviguer vers les détails de l'achat avec l'ID: ${achatId}`);
    this.router.navigate(['achat/historique-achat', achatId]);
  }
}
