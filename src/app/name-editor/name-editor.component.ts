import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})

export class NameEditorComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group(
      {
        email:'email',
        message: 'msg',
        career: 'career'
      }
    )
    this.myForm.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
