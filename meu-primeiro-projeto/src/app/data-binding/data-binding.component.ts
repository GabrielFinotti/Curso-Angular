import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  public nome: string = 'Dener';
  public idade: number = 29;

  public checkedDisable: boolean = true;

  constructor() {
    setTimeout(() => {
      this.checkedDisable = false;
    }, 3000);
  }
}
