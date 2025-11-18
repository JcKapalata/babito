import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../Models/produits';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable()
export class BoutiqueService {
  
  constructor(
    private http: HttpClient,
  ){}

  getProduitsList(): Observable<Produit[]>{
    return this.http.get<Produit[]>('api/produits').pipe(
      tap( (produitList) => console.table(produitList)),
      catchError( error =>{
        console.log(error)
        return of([])
      })
    )
  }

  getProduitById(produitId: number): Observable<Produit | undefined>{
    return this.http.get<Produit>(`api/produits/${produitId}`).pipe(
      tap( (produit) => console.log(produit)),
      catchError( error =>{
        console.log(error)
        return of(undefined)
      })
    )
  }
}
