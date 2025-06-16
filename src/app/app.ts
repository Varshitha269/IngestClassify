import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LandingPage } from "./landing-page/landing-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  template : `<router-outlet />`

})
export class App {
  protected title = 'DocumentIngestion';
}
