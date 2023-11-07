import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
})
export class FoodAddComponent {
  protected Value!: string;

  constructor(private foodListService: FoodListService) {}

  public listAddItem(value: string) {
    this.foodListService.foddListAdd(value).subscribe(
      (res) => this.foodListService.foodListAlert(res),
      (erro) => erro
    );
    this.Value = '';
  }
}
