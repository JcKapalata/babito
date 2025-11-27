import { Component } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ShowInfoLegales } from '../show-info-legales';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {

  constructor(
    private showInfoLegales : ShowInfoLegales
  ){}

  toggleCGV() {
    this.showInfoLegales.toggleExclusive('cgv');
  }

  togglePolitiqueRetour() {
    this.showInfoLegales.toggleExclusive('retour');
  }

  toggleConfidentialite() {
    this.showInfoLegales.toggleExclusive('confidentialite');
  }

  toggleApropos() {
    this.showInfoLegales.toggleExclusive('apropos');
  }


}

