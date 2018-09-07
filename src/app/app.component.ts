import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'alu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usernameUser: string;

  constructor(public storage: StorageService) { }

  ngOnInit() {
    const localUser = this.storage.getLocalUser();
    if (localUser) {
      this.usernameUser = localUser.username;
    } else {
      this.usernameUser = '';
    }
  }
}
