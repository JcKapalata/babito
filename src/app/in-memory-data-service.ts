import { Injectable } from '@angular/core';
import { Produit } from './Models/produits';
import { PRODUITS } from './Db/produits-data';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb(){
    const produits: Produit[] = PRODUITS;
    return {produits};
  }
}
