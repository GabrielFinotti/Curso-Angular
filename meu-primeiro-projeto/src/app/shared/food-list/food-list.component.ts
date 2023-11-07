import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList!: Array<string>;

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();
    // Se inscrever no evento para obter algum valor quando emitido
    // Essa valor pode ser um res (response) ou um erro(error)
    this.foodListService.emitEvent.subscribe(
      (res) => alert(`Você add => ${res}`),
      (erro) => erro
    );
  }
}
