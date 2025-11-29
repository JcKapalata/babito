import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'apropos',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './apropos.html',
  styleUrl: './apropos.css',
})
export class Apropos {

  constructor(
    private location: Location
  ){}

  closeApropos() {
    this.location.back()
  }
}
