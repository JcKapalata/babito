import {  Routes } from "@angular/router";
import { ProduitsList } from "./produits-list/produits-list";
import { CommandeFormComponent } from "./commande-form/commande-form";


export const Boutique: Routes = [
    { path: 'boutique/produits-list', component: ProduitsList},
    { path: 'boutique/commande/:id', component: CommandeFormComponent}
]