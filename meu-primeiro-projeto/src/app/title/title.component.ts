import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnChanges, OnInit, OnDestroy {
  @Input() public title: string = 'Bem vindo!'; //Input permite que a variável receba um valor externo

  ngOnInit(): void {}
  // Ele é ativado/usado quando a variável ou o componente recebe algum valor externo novo
  ngOnChanges(): void {
    setTimeout(() => {
      alert('Foi alterado com sucesso');
    }, 2000);
  }
  //Utilizado e executado quando o componente é destruido!!
  ngOnDestroy(): void {
    console.log('Componente destruido!!');
  }
}
