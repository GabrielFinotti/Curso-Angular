import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  // Utilizando o emitEvent em função como o subscribe
  public emitEvent = new EventEmitter();

  //Inutlizado pois estamos utilizando o fake server
  // private list: Array<string> = ['X bacon', 'Feijão', 'Ovo'];
  private url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}
  //Inutlizado pois estamos utilizando o fake server
  // public foodList() {
  //   return this.list;
  // }
  public foodList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.url}list-food`).pipe(
      (res) => res,
      (erro) => erro
    );
  }

  public foddListAdd(value: string) {
    // Reutilizando a função foodListAlert()
    this.foodListAlert(value);
    //Inutlizado pois estamos utilizando o fake server
    // return this.list.push(value);
  }
  // Criando a função para o envio do valor pelo emissor de evento
  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
