import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { RequestService } from '../servicios/request.service';
import * as Toastify from 'toastify-js';
import { LoginResponse, User } from 'src/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',// detalle de una persona 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  constructor(
    private requestService: RequestService,
    private router: Router

  ) { }

  
  faSpinner = faSpinner;
  isFormLoading: boolean = false
  message: string = ""
  accessToken: string = '';
  _user: User = {} as User;
  get email() {
    return this.formUser.get('email') as FormControl;
  }

  get password() {
    return this.formUser.get('password') as FormControl;
  }

  formUser = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  loginFunction() {
    this.isFormLoading = true
    const { value } = this.formUser;

    const loginObservable: Observable<LoginResponse> = this.requestService.loginRequest(value);
    if(loginObservable){
      loginObservable.subscribe({
        next: (response) => {
          this.accessToken = response.accessToken
          this._user = response.user
          console.log('esto es el token', response)
          localStorage.setItem('accessToken', this.accessToken);
          localStorage.setItem('userId', this._user.id);
          localStorage.setItem('userRol', this._user.role);
          console.log(localStorage.getItem('userId'));
          console.log(localStorage.getItem('userRol'))
          if (this._user.role === 'admin') {
            this.router.navigate(['admin'])
          } else if (this._user.role === 'server') {
            this.router.navigate(['home'])
          } else if (this._user.role === 'cook') {
            this.router.navigate(['kitchen'])
          }
        },
        error: (error) => {
          console.log(error)
          if (error.status === 400) {
            this.showError("Please, verify your Email and Password")
          }
          this.isFormLoading = false
        }
      });
    }
  }
  showError(message: string): void {
    Toastify({
      text: message,
      duration: 5000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#dc3545",
      }
    }).showToast();
  }
}
