import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AlunoComponent } from './Views/aluno/aluno.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { PerfilComponent } from './Views/perfil/perfil.component';
import { LoginComponent } from './Security/login/login.component';
import { HeaderComponent } from './Views/template/header/header.component';
import { FooterComponent } from './Views/template/footer/footer.component';
import { SidemenuComponent } from './Views/template/sidemenu/sidemenu.component';
import { HomeComponent } from './Views/template/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilModule } from './Util/util.module';
import { RouterModule, PreloadAllModules } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    HomeComponent,
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
