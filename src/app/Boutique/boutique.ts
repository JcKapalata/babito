import {  Routes } from "@angular/router";
import { ProduitsList } from "./produits-list/produits-list";


export const Boutique: Routes = [
    { path: 'boutique/produits-list', component: ProduitsList},
]