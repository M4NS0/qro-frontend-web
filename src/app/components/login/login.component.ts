import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { interval } from 'rxjs';

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

  loginForm!: FormGroup;
  error!: string;
  password: string = "";
  username: string = "";
  isLoading = false;

  currentLanguage: string = 'pt-BR';


  constructor(private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private translate: TranslateService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    } 

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.username = this.loginForm.get('username')?.value;
      this.password = this.loginForm.get('password')?.value;
      this.authService.login({ userName: this.username, password: this.password }).subscribe(
        (data) => {
          this.isLoading = true;
          this.spinner.show();
          this.authService.saveToken(data.token);
          interval(3000).subscribe(() => {
            this.isLoading = false;
            this.spinner.hide();
            this.router.navigate(['/home']);
          });
        },
        (error) => {
          this.showToastr();
        }
      );
    }
  }

  showToastr() {
    const toastrConfig: Partial<IndividualConfig> = {
      positionClass: 'toast-bottom-center'
    };

    var message = this.translate.instant('login.invalid-credentials')
    this.toastr.error(message, "", toastrConfig);
  }

  onSwitchChange(languageSwitch: boolean) {
    this.currentLanguage = languageSwitch ? 'pt-BR' : 'en-US';
    this.translate.use(this.currentLanguage);

  }
}
