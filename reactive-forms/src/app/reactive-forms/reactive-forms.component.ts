import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  public cadastroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = formBuilder.group({
      fristName: ['', Validators.required],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public submitForm() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      console.log(this.cadastroForm.value.fristName);
      console.log(this.cadastroForm.value.lastName);
    }
  }
}
