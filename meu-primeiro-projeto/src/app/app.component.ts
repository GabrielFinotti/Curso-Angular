import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  // public title: string = 'Bem vindo!' //Se usar private, não consegue utilizar a variável em outros locais

  // Carregado quando o componente é renderizado, sendo uma função void pode ser utilizar para variedades de uso!

  public valor: number = 1;
  public destruir: boolean = true;
  public addValue: number = 10;

  public getDados!: { nome: string; idade: number };

  constructor() {}

  public adicionar(): number {
    return this.valor++;
  }

  public destruirComponent() {
    this.destruir = false;
  }

  public add() {
    this.addValue += 1;
  }

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }

  ngOnInit(): void {}
  //São executados quando se tem alteração dentro dos contents e das views, seja do componente pai ou filhos!
  ngAfterContentChecked(): void {
    console.log('ngAftferContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
}
