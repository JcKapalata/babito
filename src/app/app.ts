import { Component, OnInit } from '@angular/core';
import { Navbar } from './Navbar/navbar';
import { RouterOutlet } from "@angular/router";
import { Footer } from "./footer/footer";
import { ShowInfoLegales } from './show-info-legales';
import { ConditionsGeneralesVentes } from "./Gestion-Footer/conditions-generales-ventes/conditions-generales-ventes";
import { CommonModule } from '@angular/common';
import { PolitiqueRetour } from "./Gestion-Footer/politique-retour/politique-retour";
import { PolitiqueConfidentialite } from "./Gestion-Footer/politique-confidentialite/politique-confidentialite";
import { Apropos } from "./Gestion-Footer/apropos/apropos";
import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, Footer, ConditionsGeneralesVentes, CommonModule, PolitiqueRetour, PolitiqueConfidentialite, Apropos],  
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App  implements OnInit{


  showLegalesBloc$!: Observable<boolean>;

  constructor(
    public showInfoLegales : ShowInfoLegales
  ){}

  ngOnInit(): void {
    this.showLegalesBloc$ = combineLatest([
      this.showInfoLegales.cgv$,
      this.showInfoLegales.politiqueRetour$,
      this.showInfoLegales.confidentialite$,
      this.showInfoLegales.apropos$
    ]).pipe(
      map(([cgv, retour, conf, apropos]) => cgv || retour || conf || apropos)
    );
    }
}
