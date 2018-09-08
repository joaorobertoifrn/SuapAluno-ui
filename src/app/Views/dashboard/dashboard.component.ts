import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { LoginService } from '../../services/login.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'alu-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public dashboardService: DashboardService,
    public storage: StorageService,
    public auth: LoginService,
    private router: Router
    ) { }

  ngOnInit() {
    const usuarioLogado = this.storage.getLocalUser();
    this.auth.refreshToken().subscribe(
      response => {
        this.auth.successfulLogin(usuarioLogado.token);
        this.loadData();
      },
      error => {
        this.router.navigate(['/login']);
      }
    );
  }

  loadData() {
  }

}
