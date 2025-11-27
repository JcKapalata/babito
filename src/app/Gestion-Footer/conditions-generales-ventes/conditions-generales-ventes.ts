import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShowInfoLegales } from '../../show-info-legales';

@Component({
  selector: 'conditions-generales-ventes',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './conditions-generales-ventes.html',
  styleUrl: './conditions-generales-ventes.css',
})
export class ConditionsGeneralesVentes {

  constructor(
    private showInfoLegales : ShowInfoLegales
  ){}

  closeCgv() {
    this.showInfoLegales.cgv$.next(false);
  }

}
