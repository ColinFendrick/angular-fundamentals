import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = formBuilder.group({
      email: [null],
      password: [null],
      privacyAndPolicy: [false]
    })
  }

  submitHandler(value) {
    console.log(value)
  }

  ngOnInit() {
  }

}
