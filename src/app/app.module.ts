import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AlunoComponent } from './views/aluno/aluno.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { LoginComponent } from './security/login/login.component';
import { HeaderComponent } from './views/template/header/header.component';
import { FooterComponent } from './views/template/footer/footer.component';
import { SidemenuComponent } from './views/template/sidemenu/sidemenu.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilModule } from './util/util.module';
import { RouterModule, PreloadAllModules } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    AlunoComponent,
    DashboardComponent,
    PerfilComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UtilModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'})
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
