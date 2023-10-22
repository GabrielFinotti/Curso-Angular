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
  public position: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {
    setTimeout(() => {
      this.checkedDisable = false;
    }, 3000);
  }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent) {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
