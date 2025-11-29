import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';
@Component({
  selector: 'politique-retour',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './politique-retour.html',
  styleUrl: './politique-retour.css',
})
export class PolitiqueRetour {

  constructor(
    private location: Location
  ){}

  closePolitiqueRetour(){
    this.location.back()
  }

}
