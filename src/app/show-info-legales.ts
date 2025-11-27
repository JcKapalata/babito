import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowInfoLegales {

  cgv$ = new BehaviorSubject<boolean>(false);
  politiqueRetour$ = new BehaviorSubject<boolean>(false);
  confidentialite$ = new BehaviorSubject<boolean>(false);
  apropos$ = new BehaviorSubject<boolean>(false);

  toggleExclusive(component: 'cgv' | 'retour' | 'confidentialite' | 'apropos') {
    switch (component) {
      case 'cgv':
        this.cgv$.next(!this.cgv$.value);
        this.politiqueRetour$.next(false);
        this.confidentialite$.next(false);
        this.apropos$.next(false);
        break;
      case 'retour':
        this.politiqueRetour$.next(!this.politiqueRetour$.value);
        this.cgv$.next(false);
        this.confidentialite$.next(false);
        this.apropos$.next(false);
        break;
      case 'confidentialite':
        this.confidentialite$.next(!this.confidentialite$.value);
        this.cgv$.next(false);
        this.politiqueRetour$.next(false);
        this.apropos$.next(false);
        break;
      case 'apropos':
        this.apropos$.next(!this.apropos$.value);
        this.cgv$.next(false);
        this.politiqueRetour$.next(false);
        this.confidentialite$.next(false);
        break;
    }
  }

  // Optionnel : fermer tout
  deactivateAll() {
    this.cgv$.next(false);
    this.politiqueRetour$.next(false);
    this.confidentialite$.next(false);
    this.apropos$.next(false);
  }
}
