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
  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      (res) => res,
      (erro) => erro
    );
  }
  //Inutlizado pois estamos utilizando o fake server
  // public foddListAdd(value: string) {
  //   // Reutilizando a função foodListAlert()
  //   this.foodListAlert(value);
  //   return this.list.push(value);
  // }
  public foddListAdd(value: string): Observable<Array<FoodList>> {
    return this.http
      .post<Array<FoodList>>(`${this.url}list-food`, {
        nome: value,
      })
      .pipe(
        (res) => res,
        (erro) => erro
      );
  }
  // Funcção para editar valores
  public foodListEdit(value: string, id: number): Observable<Array<FoodList>> {
    return this.http
      .put<Array<FoodList>>(`${this.url}list-food/${id}`, {
        nome: value,
      })
      .pipe(
        (res) => res,
        (erro) => erro
      );
  }
  // Função para deletar valores
  public foodListDelete(id: number): Observable<Array<FoodList>> {
    return this.http.delete<Array<FoodList>>(`${this.url}list-food/${id}`).pipe(
      (res) => res,
      (erro) => erro
    );
  }
  // Criando a função para o envio do valor pelo emissor de evento

  //Inutlizado pois estamos utilizando o fake server
  // public foodListAlert(value: string) {
  //   return this.emitEvent.emit(value);
  // }
  public foodListAlert(value: Array<FoodList>) {
    return this.emitEvent.emit(value);
  }
}
