import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  public emitEvent = new EventEmitter();
  private list: Array<string> = ['X bacon', 'Feijão', 'Ovo'];
  private url: string = 'http://localhost:3000/'; //list-food

  constructor(private http: HttpClient) {}

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
    this.foodListAlert(value);
    return this.list.push(value);
  }

  public foodListAlert(value: string) {
    this.emitEvent.emit(value);
  }
}
