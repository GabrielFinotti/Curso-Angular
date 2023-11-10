import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  public cadastroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      fristName: [''],
      lastName: [''],
    });
  }

  public submitForm() {
    console.log(this.cadastroForm.value);
    console.log(this.cadastroForm.value.fristName);
  }
}
