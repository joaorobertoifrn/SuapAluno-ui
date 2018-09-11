import { API_CONFIG } from './../../../config/api.config';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { PerfilService } from '../../../services/perfil.service';
import { Perfil } from '../../../models/perfil';
import { NotificationService } from '../../../util/messages/notification.service';

@Component({
  selector: 'alu-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public perfilUsuario: Perfil;


  constructor(
    private router: Router,
    public auth: LoginService,
    public perfilService: PerfilService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.loadPerfil();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  loadPerfil() {
    this.perfilService.getPerfil().subscribe(
      response => {
        this.perfilUsuario = response;
        this.perfilUsuario.url_foto_75x100 = API_CONFIG.baseUrl + this.perfilUsuario.url_foto_75x100;
      },
      error => {this.notificationService.notify('Falha ao Carregar Perfil : ' + error); });
  }

}
