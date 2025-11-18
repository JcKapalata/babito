import { Routes } from "@angular/router";
import { CommandeFormComponent } from "./commande-form/commande-form";
import { Panier } from "./panier/panier";


export const Achats: Routes = [
    { path: 'achat/commande/:id', component: CommandeFormComponent},
    { path: 'achat/panier', component: Panier}
]