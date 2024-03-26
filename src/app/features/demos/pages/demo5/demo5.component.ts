import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterForm } from '../../forms/register.form';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.scss'
})
export class Demo5Component {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(RegisterForm);
    this.form.controls['nationality'].valueChanges.subscribe(v => {
      if(v === 'BE') {
        this.form.controls['ssn'].enable()
      } else {
        this.form.controls['ssn'].disable()
      }
    })
  }

  save() {
    console.log(this.form.value)
  }
}
