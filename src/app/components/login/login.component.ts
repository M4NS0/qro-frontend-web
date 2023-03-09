import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate('0.3s ease-in-out')
      ]),
      transition('* => void', [
        animate('0.3s ease-in-out', style({ opacity: 0, transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  loginForm!: UntypedFormGroup;
  error!: string;
  password! : string;
  email! : string;

  currentLanguage: string = 'pt-BR';


  constructor(private formBuilder: UntypedFormBuilder, 
              private authService: AuthService, 
              private translate: TranslateService,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    console.log('onsubmit');
    

    this.authService.login(email, password).subscribe(
      data => {
        // login successful redirect to
        console.log('success');
        
      },
      error => {
        console.log('error');
        
        this.showToastr();
      }
    );
  }
  showToastr() {
    var message = this.translate.instant('login.invalid-credentials')
      this.toastr.error(message);
  }

  onSwitchChange(languageSwitch: boolean) {
    this.currentLanguage = languageSwitch ? 'pt-BR' : 'en-US';
    this.translate.use(this.currentLanguage);
    
  }
}
