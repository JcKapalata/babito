import { DetailPaiement } from "./detailPaiement";

// 1. LOGISTIQUE : Où est le colis ?
export type StatutProduit = 
  | 'en_preparation'  // Le vendeur prépare le colis
  | 'en_route'        // Le livreur a le colis
  | 'livré'           // Le client a le colis
  | 'annulé';         // Commande stoppée

export interface ProduitAchete {
    // --- MÉTADONNÉES DE PERFORMANCE (Root) ---
    readonly id?: string;          // ID technique (ex: MongoDB ObjectId)
    readonly clientId: number;      // SHARD KEY : Indexée et partitionnée
    
    // --- LES DONNÉES MÉTIER (Payload) ---
    // On garde 'data' pour isoler les infos produit de l'infrastructure
    readonly data: DetailAchat; 
}

export interface DetailAchat {
    readonly achatId: number;       // ID métier (ex: 2025001)
    readonly codeProduit: string;
    readonly reference: string;
    readonly nom: string;
    readonly prixUnitaire: number;
    readonly quantite: number;
    readonly prixTotal: number;
    readonly paiement: DetailPaiement;
    readonly tailleSelectionnee: string;
    readonly couleurSelectionnee: string;
    readonly image: string;
    readonly regionProduit: string;
    readonly addresseLivraison: string;
    readonly dateAchat: Date;
    status: StatutProduit;
}