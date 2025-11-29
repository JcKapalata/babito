import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'conditions-generales-ventes',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './conditions-generales-ventes.html',
  styleUrl: './conditions-generales-ventes.css',
})
export class ConditionsGeneralesVentes {

  constructor(
    private location: Location
  ){}

  closeCgv() {
    this.location.back()
  }

}
