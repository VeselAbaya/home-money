import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  private signInForm: FormGroup;

  constructor(private userService: UserService) {}

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
      },
      () => { // wrong password or email

      });
  }
}
