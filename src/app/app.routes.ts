import { Routes } from '@angular/router';
import { Boutique } from './Boutique/boutique';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    ...Boutique,
    {path: '', redirectTo: 'boutique/produits-list', pathMatch: 'full' },
    { path: '**', component: PageNotFound }
];
