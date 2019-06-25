import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/user/user.interface';
import { UserService } from '../../shared/user/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date = new Date();
  $userName: Observable<string>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.$userName = this.userService.getUser().pipe(map((user: IUser) => user.name));
  }

  onLogout() {
    localStorage.removeItem('token');
  }
}
