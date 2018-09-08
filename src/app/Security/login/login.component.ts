import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { NotificationService } from '../../util/messages/notification.service';
import { Router } from '@angular/router';
import { Credenciais } from '../../models/credenciais';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'alu-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  creds: Credenciais = {
    username: '',
    password: ''
};

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    public auth: LoginService,
    public storage: StorageService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required])
    });
    const localUser = this.storage.getLocalUser();
    if (localUser) {
      this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(localUser.token);
        this.router.navigate(['/']);
      },
      error => {this.router.navigate(['/login']); });
    } else {
      this.router.navigate(['/login']);
    }
  }

  login() {
    this.creds.username = this.loginForm.value.username;
    this.creds.password = this.loginForm.value.password;
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      this.auth.successfulLogin(response.token);
      this.notificationService.notify(`Bem vindo`);
      this.router.navigate(['/']);
    },
    error => {this.notificationService.notify('Falha de Login : ' + error); });
  }
}
