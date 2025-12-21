import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (_route, state) => {

    const authService = inject(AuthService);
    const router = inject(Router);

    // Fonction utilitaire pour rediriger vers login avec l'URL de retour
    const redirectToLogin = () => {
        return router.navigate(['login'], { 
        queryParams: { returnUrl: state.url } 
        });
    };

    // 1. Si l'état est encore inconnu (chargement initial)
    if (authService.user() === undefined) {
        return authService.getUsers().pipe(
        map(user => {
            if (user && user.id) {
            return true;
            } else {
            redirectToLogin();
            return false;
            }
        }),
        catchError(() => {
            redirectToLogin();
            return of(false);
        })
        );
    }

    // 2. Si l'utilisateur est explicitement déconnecté
    if (authService.user() === null) {
        redirectToLogin();
        return false;
    }

    // 3. Utilisateur connecté
    return true;

};
