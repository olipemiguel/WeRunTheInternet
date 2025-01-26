import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main.component";
import { ServicesComponent } from "./services.component";
import { ProcessComponent } from "./process.component";
import { FaqComponent } from "./faq.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainComponent,
    ServicesComponent,
    // ProcessComponent
    FaqComponent,
  ],
  templateUrl: '../view/app.component.html',
  styleUrl: '../view/scss/app.component.scss'
})
export class AppComponent {
  title = 'Blockchain';
}
