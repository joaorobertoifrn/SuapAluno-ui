import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service';
import { NotificationService } from '../../../util/messages/notification.service';
import { Perfil } from '../../../models/perfil';
import { API_CONFIG } from '../../../config/api.config';

@Component({
  selector: 'alu-sidemenu',
  templateUrl: './sidemenu.component.html'
})
export class SidemenuComponent implements OnInit {

  public perfilUsuario: Perfil;

  constructor(
    public perfilService: PerfilService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.loadPerfil();

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
