import { Routes } from '@angular/router';
import { Boutique } from './Boutique/boutique';
import { PageNotFound } from './page-not-found/page-not-found';
import { Achats } from './Achat/achat';
import { Accueil } from './Acceuil/accueil';

export const routes: Routes = [
    ...Boutique,
    ...Achats,
    { path: 'accueil', component: Accueil},
    {path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: '**', component: PageNotFound }
];
