import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent implements OnInit {
  constructor(private activedeRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Pega os parametro das rotas.
    this.activedeRouter.params.subscribe((res) => {
      console.log(res['id'], res['username'], res);
    });

    // Pega os parametros posterior a '?' das rotas.
    this.activedeRouter.queryParams.subscribe((res) => {
      console.log(res);
    });

    // setInterval(() => {
    //   // Navega para a pagina sem dar reloading.
    //   // this.router.navigate(['404'])

    //   // Navega para a pagina dando reloading.
    //   // this.router.navigateByUrl('404')
    // }, 5000)
  }
}
