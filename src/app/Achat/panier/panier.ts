import { Component, OnInit } from '@angular/core';
import { CommandeItem } from '../../Models/commande';
import { CommonModule, CurrencyPipe, Location } from '@angular/common';
import { AchatService} from '../achat-service';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-panier',
  imports: [CommonModule, CurrencyPipe, MatIconModule, MatButtonModule],
  templateUrl: './panier.html',
  styleUrls: ['./panier.css']
})
export class Panier implements OnInit {
  items: CommandeItem[] = [];

  constructor(
    private achatService: AchatService,
    private location: Location
  ) {}

  ngOnInit() {
    this.achatService.items$.subscribe(items => {
      this.items = items;
    });
  }

  increment(item: CommandeItem) {
    item.quantity++;
    this.achatService.updateItems(this.items);
  }

  decrement(item: CommandeItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.achatService.updateItems(this.items);
    }
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.getTotal(), 0);
  }

  supprimer(item: CommandeItem) {
    this.items = this.items.filter(i => i !== item);
    this.achatService.updateItems(this.items);
  }

  goBack() {
    this.location.back();
  }
}
