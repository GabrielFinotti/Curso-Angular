import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  public listComida!: Array<{ comida: string }>;

  constructor() {
    this.listComida = [
      { comida: 'X-Salada' },
      { comida: 'X-Bacon' },
      { comida: 'Coxinha' },
    ];
  }

  public submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
