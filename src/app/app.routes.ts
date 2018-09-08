import { LoginComponent } from './security/login/login.component';
import { Routes } from '@angular/router';

import { AlunoComponent } from './views/aluno/aluno.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';

export const ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'aluno', component: AlunoComponent }
];
