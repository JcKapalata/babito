import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShowInfoLegales } from '../../show-info-legales';

@Component({
  selector: 'apropos',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './apropos.html',
  styleUrl: './apropos.css',
})
export class Apropos {

  constructor(
    private showInfoLegales : ShowInfoLegales
  ){}

  closeApropos() {
    this.showInfoLegales.apropos$.next(false);
  }
}
