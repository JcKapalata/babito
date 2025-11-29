import { Component, OnInit } from '@angular/core';
import { Navbar } from './Navbar/navbar';
import { RouterOutlet } from "@angular/router";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, Footer],  
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
