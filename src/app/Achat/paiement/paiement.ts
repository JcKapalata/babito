import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-paiement',
  imports: [ReactiveFormsModule],
  templateUrl: './paiement.html',
  styleUrls: ['./paiement.css']
})
export class Paiement implements OnInit {

  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.paymentForm = this.fb.group({
      method: ['', Validators.required],
      cardNumber: ['', []],
      cardName: ['', []],
      expiry: ['', []],
      cvv: ['', []],
      mobileNumber: ['', []],
      operator: ['', []]
    });

    // Gestion des validations dynamiques selon la méthode choisie
    this.paymentForm.get('method')?.valueChanges.subscribe(method => {
      if (method === 'visa') {
        this.paymentForm.get('cardNumber')?.setValidators([Validators.required, Validators.minLength(16), Validators.maxLength(16)]);
        this.paymentForm.get('cardName')?.setValidators([Validators.required]);
        this.paymentForm.get('expiry')?.setValidators([Validators.required]);
        this.paymentForm.get('cvv')?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
        // Désactive Mobile Money
        this.paymentForm.get('mobileNumber')?.clearValidators();
        this.paymentForm.get('operator')?.clearValidators();
      } else if (method === 'mobile') {
        this.paymentForm.get('mobileNumber')?.setValidators([Validators.required, Validators.minLength(8)]);
        this.paymentForm.get('operator')?.setValidators([Validators.required]);
        // Désactive Visa
        this.paymentForm.get('cardNumber')?.clearValidators();
        this.paymentForm.get('cardName')?.clearValidators();
        this.paymentForm.get('expiry')?.clearValidators();
        this.paymentForm.get('cvv')?.clearValidators();
      }
      // Met à jour les erreurs
      this.paymentForm.get('cardNumber')?.updateValueAndValidity();
      this.paymentForm.get('cardName')?.updateValueAndValidity();
      this.paymentForm.get('expiry')?.updateValueAndValidity();
      this.paymentForm.get('cvv')?.updateValueAndValidity();
      this.paymentForm.get('mobileNumber')?.updateValueAndValidity();
      this.paymentForm.get('operator')?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      console.log('Paiement valide :', this.paymentForm.value);
      alert('Paiement effectué !');
    } else {
      this.paymentForm.markAllAsTouched();
    }
  }
}
