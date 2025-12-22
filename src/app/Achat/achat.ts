import { Routes } from "@angular/router";
import { authGuard } from "../authentification/auth-guard";


export const Achats: Routes = [
    { 
        path: 'achat/achat-direct/:id', 
        loadComponent: () => import('./achat-direct/achat-direct').then(m => m.AchatDirect), 
        canActivate:[authGuard] 
    },
    { 
        path: 'achat/panier', 
        loadComponent: () => import('./panier/panier').then(m => m.Panier), 
        canActivate:[authGuard] 
    },
    {
        path: 'achat/historique-achat/:achatId',
        loadComponent: () => import('./historique-detail-achat/historique-detail-achat').then(m => m.HistoriqueDetailAchat),
        canActivate:[authGuard]
    },
    { 
        path: 'achat/historique-achats', 
        loadComponent: () => import('./historique-achat/historique-achat').then(m => m.HistoriqueAchat), 
        canActivate:[authGuard] 
    },
]