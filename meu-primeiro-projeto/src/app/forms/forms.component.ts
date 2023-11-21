import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  public listComidas!: Array<{ comida: string; preco: number }>;

  constructor() {
    this.listComidas = [
      { comida: 'X-Salada', preco: 10 },
      { comida: 'X-Bacon', preco: 11 },
      { comida: 'Coxinha', preco: 12 },
    ];
  }
}
