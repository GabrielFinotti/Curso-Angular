import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) =>
      console.log(res['id'], res['username'], res)
    );

    this.activatedRoute.queryParams.subscribe((res) => console.log(res));

    setInterval(() => {
      // Esse redireciona sem recarregar a página
      // this.router.navigate(['404']);
      // Esse redireciona recarregando a página por completa
      // this.router.navigateByUrl('404')
    },5000)
  }
}
