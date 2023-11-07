import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  public emitEvent = new EventEmitter();
  private list: Array<string> = ['X bacon', 'Feijão', 'Ovo'];

  constructor() {}

  public foodList() {
    return this.list;
  }

  public foddListAdd(value: string) {
    this.foodListAlert(value);
    return this.list.push(value);
  }

  public foodListAlert(value: string) {
    this.emitEvent.emit(value);
  }
}
