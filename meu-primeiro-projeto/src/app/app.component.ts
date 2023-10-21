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
  template: `
    {{ valor }}
    <app-title *ngIf="destruir"></app-title>
    <br /><br />
    <button type="button" (click)="destruirComponent()">
      Destruir componente
    </button>
    <button type="button" (click)="adicionar()">Adicionar</button>
    <router-outlet></router-outlet>
  `,
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
  constructor() {}

  public adicionar(): number {
    return this.valor++;
  }

  public destruirComponent() {
    this.destruir = false;
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
