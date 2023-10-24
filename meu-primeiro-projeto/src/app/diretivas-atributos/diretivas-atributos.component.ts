import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public heightpx: string = '20px';
  public backgroundColor: string = 'green';

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor) {
        this.valor = !this.valor;
      } else {
        this.valor = true;
      }

      if (this.heightpx == '20px') {
        this.heightpx = '50px';
        this.backgroundColor = 'yellow';
      } else {
        this.heightpx = '20px';
        this.backgroundColor = 'green';
      }
    }, 2000);
  }
}
