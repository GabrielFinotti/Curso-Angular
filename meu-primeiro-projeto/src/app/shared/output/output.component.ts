import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  // Função para enviar dados para outro componente
  @Output() public enviarDados = new EventEmitter();
  public list: Array<{ nome: string; idade: number }> = [
    {
      nome: 'Dener',
      idade: 29,
    },
    {
      nome: 'Nay',
      idade: 31,
    },
    {
      nome: 'José',
      idade: 58,
    },
  ];

  public getDados(event: number) {
    // emit() : Função usada para ditar qual dado será enviado!
    this.enviarDados.emit(this.list[event]);
  }
}
