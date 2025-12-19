import { Routes } from "@angular/router";
import { Panier } from "./panier/panier";
import { AchatDirect } from "./achat-direct/achat-direct";
import { authGuard } from "../authentification/auth-guard";


export const Achats: Routes = [
    { path: 'achat/achat-direct/:id', component: AchatDirect, canActivate: [authGuard]},
    { path: 'achat/panier', component: Panier, canActivate: [authGuard]}
]