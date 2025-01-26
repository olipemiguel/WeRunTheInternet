import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AppMain',
  standalone: true,
  imports: [],
  templateUrl: '../view/main.component.html',
  styleUrl: '../view/scss/main.component.scss'
})
export class MainComponent implements OnInit {
  protected MenuActive : boolean = false;
  protected language !: any;
  ngOnInit(): void {
    this.language = window.navigator.language; // TODO: Notificação do Vite é por causa do Window Document!
  }
  ActiveMenu(){
    this.MenuActive =! this.MenuActive;
  }
}
