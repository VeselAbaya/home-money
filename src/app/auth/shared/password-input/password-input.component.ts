import { Component, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordInputComponent),
    multi: true
  }]
})
export class PasswordInputComponent implements ControlValueAccessor {
  @ViewChild('passwordInput') passwordInput;
  @ViewChild('eyeButton') eyeButton;
  disabled: boolean;
  onChange = (password: string) => {};
  onTouched = () => {};

  constructor(private renderer: Renderer2) {}

  get value() {
    return this.passwordInput.nativeElement.value;
  }

  writeValue(password: string): void {
    this.renderer.setProperty(this.passwordInput.nativeElement, 'value', password);
    this.onChange(this.value);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onEyeClick() {
    const inputType = this.passwordInput.nativeElement.type;
    this.passwordInput.nativeElement.type = inputType === 'password' ? 'text' : 'password';
  }
}
