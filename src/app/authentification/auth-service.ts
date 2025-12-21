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

  getUsers(): Observable<UserClientApi | null> {
    return this.http.get<UserClientApi>(this.BASE_URL).pipe(
      map((result: any) => {
        // Vérification : l'objet reçu a-t-il au moins un ID ou un email ?
        if (result && (result.id || result.email)) {
          const userInstance: UserClientApi = { ...result };
          
          // On met à jour le signal avec des données valides
          this.user.set(userInstance);
          return userInstance;
        }

        // Si les données sont invalides (ex: {} ou null)
        this.user.set(null); 
        return null;
      }),
      catchError(err => {
        console.error('Erreur lors de la récupération de l\'utilisateur', err);
        this.user.set(null);
        return of(null);
      })
    );
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
