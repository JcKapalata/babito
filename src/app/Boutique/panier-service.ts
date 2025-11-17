import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private showPanierSubject = new BehaviorSubject<boolean>(false);
  showPanier$ = this.showPanierSubject.asObservable();

  togglePanier() {
    this.showPanierSubject.next(!this.showPanierSubject.value);   
  }
}
