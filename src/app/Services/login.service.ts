import { API_CONFIG } from '../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalUser } from '../models/local_user';
import { StorageService } from './storage.service';
import { Credenciais } from '../models/credenciais';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';

@Injectable()
export class LoginService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(public http: HttpClient, public storage: StorageService) {}

  refreshToken() {
    const usuarioLogado = this.storage.getLocalUser();

    return this.http.post(`${API_CONFIG.baseUrl}api/v2/autenticacao/token/refresh/`, usuarioLogado);
  }

  authenticate(creds: Credenciais): Observable<Auth> {
    return this.http.post<Auth>(
        `${API_CONFIG.baseUrl}api/v2/autenticacao/token/`,
        creds);
}

  successfulLogin(authorizationValue: string) {
    const tok = authorizationValue;
    const user: LocalUser = {
      token: tok
    };
    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }
}
