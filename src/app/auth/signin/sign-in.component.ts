import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  onSubmit() {
    const {email, password} = this.signInForm.value;
    this.userService.signIn(email, password).subscribe(
      (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/main']);
      },
      (error) => {
        switch (error.status) {
          case 403:
            alert('Неверные данные');
          break;
          case 400:
            alert('Что-то пошло не так');
          break;
        }
      });
  }
}
