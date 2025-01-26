import { Component } from '@angular/core';
import { FooterComponent } from "./footer.component";
@Component({
  selector: 'MainFAQ',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: '../view/faq.component.html',
  styleUrl: '../view/scss/faq.component.scss'
})
export class FaqComponent {

}
