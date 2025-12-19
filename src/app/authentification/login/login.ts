import { Component, inject } from '@angular/core';
import { AuthService } from '../auth-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // 1. Injection des services
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // 2. Modèles pour les champs du formulaire
  credentials = { email: '', password: '' };
  errorMessage = '';

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (success) => {
        if (success) {
          // 3. RÉCUPÉRATION DU CHEMIN DE RETOUR (SÉCURITÉ UX)
          // Si returnUrl existe dans l'adresse, on y va, sinon on va sur /produits
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        } else {
          this.errorMessage = 'Email ou mot de passe incorrect.';
        }
      },
      error: (err) => {
        this.errorMessage = 'Une erreur serveur est survenue.';
        console.error(err);
      }
    });
  }
}
