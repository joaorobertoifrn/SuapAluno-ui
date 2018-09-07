import { API_CONFIG } from '../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalUser } from '../models/local_user';
import { StorageService } from './storage.service';
import { Credenciais } from '../Models/credenciais';

@Injectable()
export class LoginService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(public http: HttpClient, public storage: StorageService) {}

  refreshToken() {
    return this.http.post(
      `${API_CONFIG.baseUrl}/auth/refresh_token`,
      {},
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  authenticate(creds: Credenciais) {
    return this.http.post(
        `${API_CONFIG.baseUrl}/login`,
        creds,
        {
            observe: 'response',
            responseType: 'text'
        });
}

  successfulLogin(authorizationValue: string) {
    const tok = authorizationValue.substring(7);
    const user: LocalUser = {
      token: tok,
      username: this.jwtHelper.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }
}
