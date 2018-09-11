import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from '../models/page';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) {
  }

  getAlunoPagina(page, size): Observable<Page> {
    return this.http.get<Page>(`${API_CONFIG.baseUrl}api/v2/edu/alunos/?limit=${size}&offset=${page}`);
  }
}
