import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';
import { catchError, filter, map, of, switchMap, take} from 'rxjs';

export const authGuard: CanActivateFn = (_route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('[AuthGuard] Vérification accès à', state.url);

  return authService.isLoggedIn$.pipe(
    take(1),
    switchMap(loggedIn => {
      console.log('[AuthGuard] État isLoggedIn$', loggedIn);

      if (loggedIn === null) {
        console.log('[AuthGuard] Session en cours de validation, on attend...');
        return authService.isLoggedIn$.pipe(
          filter(v => v !== null),
          take(1),
          map(final => {
            console.log('[AuthGuard] Résultat final après validation:', final);
            return final ? true : router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
          })
        );
      }

      return of(loggedIn ? true : router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } }));
    })
  );
};
