import { Routes } from '@angular/router';
import { Boutique } from './Boutique/boutique';
import { PageNotFound } from './page-not-found/page-not-found';
import { Achats } from './Achat/achat';

export const routes: Routes = [
    ...Boutique,
    ...Achats,
    {path: '', redirectTo: 'boutique/produits-list', pathMatch: 'full' },
    { path: '**', component: PageNotFound }
];
