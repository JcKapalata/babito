import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'politique-confidentialite',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './politique-confidentialite.html',
  styleUrl: './politique-confidentialite.css',
})
export class PolitiqueConfidentialite {

  constructor(
    private location: Location
  ){}

  closeConfidantialite() {
    this.location.back()
  }
}
