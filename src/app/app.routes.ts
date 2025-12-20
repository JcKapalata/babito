import { Routes } from '@angular/router';
import { Boutique } from './Boutique/boutique';
import { PageNotFound } from './page-not-found/page-not-found';
import { Achats } from './Achat/achat';
import { Accueil } from './Acceuil/accueil';
import { GestionFooter } from './Gestion-Footer/GestionFooter';
import { Login } from './authentification/login/login';
import { UserRoutes } from './UserProfile/userRoutes';

export const routes: Routes = [
    { path: 'login', component: Login},
    ...UserRoutes,
    ...Boutique,
    ...Achats,
    ...GestionFooter,
    { path: 'accueil', component: Accueil},
    {path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: '**', component: PageNotFound }
];
