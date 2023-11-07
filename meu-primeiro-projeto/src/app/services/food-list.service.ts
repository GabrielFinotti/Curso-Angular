import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  // Utilizando o emitEvent em função como o subscribe
  public emitEvent = new EventEmitter();
  private list: Array<string> = ['X bacon', 'Feijão', 'Ovo'];

  constructor() {}

  public foodList() {
    return this.list;
  }

  public foddListAdd(value: string) {
    // Reutilizando a função foodListAlert()
    this.foodListAlert(value);
    return this.list.push(value);
  }
  // Criando a função para o envio do valor pelo emissor de evento
  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
