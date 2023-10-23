import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

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
}
