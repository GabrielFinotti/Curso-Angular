import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList!: Array<FoodList>;

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    //Inutlizado pois estamos utilizando o fake server
    // this.foodList = this.foodListService.foodList();

    // Inscreveu na função que recebe os valores do servidor e assim com sua resposta receber um res ou um erro
    // O res quando disponível é encamiado ao foodList para mostrar os valores
    this.foodListService.foodList().subscribe(
      (res) => (this.foodList = res),
      (erro) => console.error(erro)
    );

    // Se inscrever no evento para obter algum valor quando emitido
    // Essa valor pode ser um res (response) ou um erro(error)
    this.foodListService.emitEvent.subscribe(
      (res) => {
        alert(`Você add => ${res.nome}`);
        return this.foodList.push(res);
      },
      (erro) => erro
    );
  }
}
