import { ConvenioComponent } from './models/convenio/convenio.component';
import { LoginComponent } from './security/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { PacienteComponent } from './models/paciente/paciente.component';
import { ProfissionalComponent } from './models/profissional/profissional.component';
import { LocalatendimentoComponent } from './models/localatendimento/localatendimento.component';
import { EspecialidadeComponent } from './models/especialidade/especialidade.component';
import { UsuarioComponent } from './models/usuario/usuario.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'paciente', component: PacienteComponent },
    { path: 'profissional', component: ProfissionalComponent },
    { path: 'localatendimento', component: LocalatendimentoComponent },
    { path: 'especialidade', component: EspecialidadeComponent },
    { path: 'convenio', component: ConvenioComponent },
    { path: 'usuario', component: UsuarioComponent }
];
