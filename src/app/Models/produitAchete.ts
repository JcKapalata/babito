import { DetailPaiement } from "./detailPaiement";

export type StatutProduit = 'livré' | 'en cours' | 'annulé' | 'en attente paiement';

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