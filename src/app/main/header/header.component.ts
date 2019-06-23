import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  date = new Date();

  onLogout() {
    localStorage.removeItem('token');
  }
}
