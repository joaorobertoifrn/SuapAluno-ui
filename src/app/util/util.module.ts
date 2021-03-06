import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { NotificationService } from './messages/notification.service';
import { BarranotificacaoComponent } from './barranotificacao/barranotificacao.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';
import { DashboardService } from '../services/dashboard.service';
import { PerfilService } from '../services/perfil.service';
import { PaginaComponent } from './pagina/pagina.component';
import { AlunoService } from '../services/aluno.service';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    BarranotificacaoComponent,
    PaginaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BarranotificacaoComponent,
    PaginaComponent
  ]
})
export class UtilModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilModule,
      providers: [
        DashboardService,
        StorageService,
        LoginService,
        PerfilService,
        AlunoService,
        NotificationService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
      ]
    };
  }
}
