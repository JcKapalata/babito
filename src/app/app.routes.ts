import { Routes } from '@angular/router';
import { Boutique } from './Boutique/boutique';
import { PageNotFound } from './page-not-found/page-not-found';
import { Achats } from './Achat/achat';
import { Acceuil } from './Acceuil/acceuil';
import { GestionFooter } from './Gestion-Footer/GestionFooter';

export const routes: Routes = [
    ...Boutique,
    ...Achats,
    ...GestionFooter,
    { path: 'acceuil', component: Acceuil},
    {path: '', redirectTo: 'boutique/produits-list', pathMatch: 'full' },
    { path: '**', component: PageNotFound }
];
