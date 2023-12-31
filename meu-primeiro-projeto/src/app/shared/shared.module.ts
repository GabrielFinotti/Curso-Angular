import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Componentes
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';

@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
  ],
})
export class SharedModule {}
