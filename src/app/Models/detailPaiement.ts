export type MethodePaiement = 'visa' | 'mastercard' | 'mobile_money' | 'cash_delivery';

// 2. FINANCE : Où est l'argent ?
export type EtatTransaction = 
  | 'en_attente'      // Argent non reçu (cas du Paiement à la livraison)
  | 'payé'            // Argent reçu (Visa / Mobile Money)
  | 'échec'           // La transaction a foiré
  | 'remboursé';      // L'argent a été rendu

export interface DetailPaiement {
    readonly methode: MethodePaiement;
    readonly etat: EtatTransaction;
    readonly montantPaye: number;
    readonly devise: string;
    
    // Optionnel : présent seulement si paiement déjà effectué en ligne/mobile
    readonly transactionId?: string; 
    readonly dateTransaction?: Date;

    // Spécifique Mobile Money (ex: numéro de téléphone utilisé)
    readonly numeroMobile?: string; 
    readonly operateur?: 'orange' | 'airtel' | 'mpesa' | 'cash';

    // Spécifique Carte
    readonly cardLast4?: string;

    // Spécifique Livraison
    readonly fraisLivraison?: number;
}