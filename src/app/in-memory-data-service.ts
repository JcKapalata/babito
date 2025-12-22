import { Injectable } from '@angular/core';
import { Produit } from './Models/produits';
import { PRODUITS } from './Db/produits-data';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { USERS } from './Db/users-data';
import { UserClientApi } from './Models/clientUser';
import { ProduitAchete } from './Models/produitAchete';
import { HISTORIQUE_ACHATS} from './Db/historique-achat';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb(){
    const produits: Produit[] = PRODUITS;
    const clients: UserClientApi[] = USERS;
    const achats: ProduitAchete[] = HISTORIQUE_ACHATS;

    return {produits, clients, achats};
  }
}
