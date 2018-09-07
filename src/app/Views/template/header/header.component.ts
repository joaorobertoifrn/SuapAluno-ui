import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'alu-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public auth: LoginService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
