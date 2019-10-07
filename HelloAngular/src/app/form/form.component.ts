import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.compose([
        Validators.minLength(2), Validators.required
      ])],
      privacyAndPolicy: [false]
    })
  }

  submitHandler(value) {
    console.log(value)
  }

  ngOnInit() {
    this.reactiveForm.get('password').valueChanges.subscribe(value => {
      console.log(value)
    })
  }

}
