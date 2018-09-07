import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlunoComponent } from './Views/aluno/aluno.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { PerfilComponent } from './Views/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    DashboardComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
