import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  private signUpForm: FormGroup;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      'name': new FormControl(null, Validators.required),
      'agreeWithRights': new FormControl(null, Validators.requiredTrue)
    });
  }

  onSubmit() {
    const {email, password, name} = this.signUpForm.value;
    this.userService.signUp(email, password, name).subscribe((token) => {
      localStorage.setItem('token', token);
      console.log(token);
    });
  }
}
