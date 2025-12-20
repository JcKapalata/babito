import { UserClientApi } from './../Models/clientUser';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { jwtDecode} from 'jwt-decode';

export interface Credentials{
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private BASE_URL= 'api/clients';

  user = signal<UserClientApi | null | undefined>(undefined);

  login(credentials: Credentials): Observable<UserClientApi| null| undefined>{
    // 1. On cherche l'utilisateur qui a cet email et ce password
    return this.http.get<UserClientApi[]>(`${this.BASE_URL}`).pipe(
      map((users: UserClientApi[]) => {
        const foundUser = users.find(
          u => u.email === credentials.email && u.password === credentials.password
        );

        if (!foundUser) {
          throw new Error('Identifiants incorrects');
        }

        // 2. Simuler un token et stocker
        const mockToken = 'fake-jwt-token-' + foundUser.id;
        localStorage.setItem('token', mockToken);

        const userInstance: UserClientApi = {
          ...foundUser,
          token: mockToken
        };

        // 3. Mettre à jour le signal
        this.user.set(userInstance);
        return userInstance;
      }),
      catchError((err) => {
        console.error('Login Error:', err);
        this.user.set(null);
        return of(null); // Retourne null pour déclencher "impossible de se connecter"
      })
    );
  }

  getUsers(): Observable<UserClientApi| null | undefined>{
    return this.http.get(this.BASE_URL).pipe(
      map( (result: any) => {
        const userInstance: UserClientApi = {
          ...result
        }

        this.user.set(userInstance);

        return this.user();
      })
    )
  }

  logout(): Observable<null> {
    return this.http.get(this.BASE_URL).pipe(
      tap( (result: any) => {
        localStorage.removeItem('token');
        this.user.set(null);
      })
    )
  }

}
