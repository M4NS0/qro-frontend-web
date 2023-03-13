import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gen-form',
  templateUrl: './gen-form.component.html',
  styleUrls: ['./gen-form.component.css']
})
export class GenFormComponent implements OnInit {

  generatorForm!: FormGroup;
  generatorFormKeys: any;
  isLoading: boolean = false;
  inputFieldTypes = [];


  constructor(private formBuilder: UntypedFormBuilder) { 
    this.generatorForm = this.formBuilder.group({
      name: ['', Validators.required],
      advertisement: ['', Validators.required],
      email: ['', Validators.required],
      homepage: ['', Validators.required],
      whatsapp: ['', Validators.required],
      telegram: ['', Validators.required],
      facebook: ['', Validators.required],
      instagram: ['', Validators.required],
      youtube: ['', Validators.required],
      voucher: ['', Validators.required],
    });

     this.generatorFormKeys = Object.keys(this.generatorForm.controls);
  }

  ngOnInit(): void {
    
  }
 

  onSubmit() {
  }

}
