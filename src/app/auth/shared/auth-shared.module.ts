import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordInputComponent } from './password-input/password-input.component';

@NgModule({
  declarations: [
    PasswordInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PasswordInputComponent
  ]
})
export class AuthSharedModule {}
