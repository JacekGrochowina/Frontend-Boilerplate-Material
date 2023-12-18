import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlStatus,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { distinctUntilChanged, Observable, Subject, takeUntil, tap } from 'rxjs';

import { ValidationService } from '@shared/services/validation.service';
import { InputPasswordTypeAttribute } from '@shared/components/input-password/types';

@Component({
  selector: 'app-input-password',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent)
    }
  ],
  templateUrl: './input-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class InputPasswordComponent implements OnInit, ControlValueAccessor {

  protected isPasswordVisible: boolean = false;
  protected required: boolean = false;
  private destroy$: Subject<void> = new Subject<void>();

  @ViewChild(FormControlDirective, { static: true }) formControlDirective!: FormControlDirective;

  @Input() appearanceAttribute: MatFormFieldAppearance = 'fill';
  @Input() label!: string | null;
  @Input() formControl!: FormControl;
  @Input() formControlName!: string;

  constructor(
    private controlContainer: ControlContainer,
    private validationService: ValidationService
  ) {}

  protected get control(): FormControl {
    return this.formControl || this.controlContainer.control?.get(this.formControlName);
  }

  protected get error(): null | undefined {
    return this.validationService.getErrorMessage(this.control);
  }

  protected get visibilityIcon(): string {
    return this.isPasswordVisible ? 'visibility' : 'visibility_off';
  }

  protected get inputType(): InputPasswordTypeAttribute {
    return this.isPasswordVisible ? 'text' : 'password';
  }

  protected changeVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  public ngOnInit(): void {
    this.required = this.control.hasValidator(Validators.required);
    this.handleControlStatusChanges().pipe(takeUntil(this.destroy$)).subscribe();
  }

  public registerOnChange(fn: unknown): void {
    this.formControlDirective.valueAccessor?.registerOnChange(fn);
  }

  public registerOnTouched(fn: unknown): void {
    this.formControlDirective.valueAccessor?.registerOnTouched(fn);
  }

  public setDisabledState(isDisabled: boolean): void {
    if (this.formControlDirective.valueAccessor?.setDisabledState) {
      this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
    }
  }

  public writeValue(value: unknown): void {
    this.formControlDirective.valueAccessor?.writeValue(value);
  }

  private handleControlStatusChanges(): Observable<FormControlStatus> {
    return this.control.statusChanges.pipe(
      distinctUntilChanged(),
      tap(() => {
        this.required = this.control.hasValidator(Validators.required);
      })
    );
  }
}
