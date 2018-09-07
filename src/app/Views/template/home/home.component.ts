import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Dashboard } from '../../../Models/dashboard.model';

@Component({
  selector: 'alu-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  dash: Dashboard;

  constructor(public dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.findAll()
      .subscribe(response => {
        this.dash = response as Dashboard;
      },
      error => {});
  }

}
