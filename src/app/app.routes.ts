import { LoginComponent } from './security/login/login.component';
import { Routes } from '@angular/router';

import { AlunoComponent } from './Views/aluno/aluno.component';
import { HomeComponent } from './Views/template/home/home.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'aluno', component: AlunoComponent },
];
