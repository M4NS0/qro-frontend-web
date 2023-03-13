import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gen-form',
  templateUrl: './gen-form.component.html',
  styleUrls: ['./gen-form.component.css']
})
export class GenFormComponent implements OnInit {

  generatorForm!: FormGroup;
  isLoading: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.generatorForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
  }

}
