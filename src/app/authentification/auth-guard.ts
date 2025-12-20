import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (_route, state) => {

    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.user() === undefined) {
        return authService.getUsers().pipe(
            map( _ => {
                return true;
            }),
            catchError(_ => {
                console.log('impossible de se conneccter avec le gaurd');
                router.navigate(['login'])
                return of(false)
            })
        )
    }

    if (authService.user() === null) {
        router.navigate(['login'])
    }

    return true;

};
