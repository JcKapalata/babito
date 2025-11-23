import { Component } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {

}

