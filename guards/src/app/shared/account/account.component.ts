import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  public exit(): boolean {
    if (confirm('Você quer sair?')) {
      return true;
    } else {
      return false;
    }
  }
}
