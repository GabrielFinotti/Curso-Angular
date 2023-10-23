import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Dener Troquatte', idade: 29 },
    { nome: 'José', idade: 34 },
    { nome: 'Finotti', idade: 20 },
    { nome: 'Paula', idade: 49 },
  ];

  ngOnInit(): void {
    // setInterval(() => {
    //   if (this.condition) {
    //     this.condition = !this.condition;
    //   } else {
    //     this.condition = true;
    //   }
    // }, 2000);
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = !this.conditionClick;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({ nome: 'Geovane', idade: 20 });
  }

  public onClickEventList(event: number) {
    // elimina um valor de um array de acordo com o seu index;
    this.list.splice(event, 1);
  }
}
