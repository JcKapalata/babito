import { Injectable } from '@angular/core';
import { Produit } from './Models/produits';
import { PRODUITS } from './Db/produits-data';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserClient } from './Models/clientUser';
import { USERS } from './Db/users-data';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb(){
    const produits: Produit[] = PRODUITS;
    const clients: UserClient[] = USERS;
    return {produits, clients};
  }
}
