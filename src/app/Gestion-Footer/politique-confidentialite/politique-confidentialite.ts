import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShowInfoLegales } from '../../show-info-legales';

@Component({
  selector: 'politique-confidentialite',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './politique-confidentialite.html',
  styleUrl: './politique-confidentialite.css',
})
export class PolitiqueConfidentialite {
  constructor(
    private showInfoLegales : ShowInfoLegales
  ){}

  closeConfidantialite() {
    this.showInfoLegales.confidentialite$.next(false);
  }
}
