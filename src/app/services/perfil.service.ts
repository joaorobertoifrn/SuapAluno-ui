import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(public http: HttpClient) {}

  getPerfil() {
    return this.http.get<Perfil>(`${API_CONFIG.baseUrl}api/v2/minhas-informacoes/meus-dados/`);
  }
}
