import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, ViewChild, } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlStatus,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { distinctUntilChanged, Observable, Subject, takeUntil, tap } from 'rxjs';
import { ValidationService } from "../../services/validation.service";
import { InputPasswordTypeAttribute } from "./types/input.type";

@Component({
  selector: 'app-input-password',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
    },
  ],
  templateUrl: './input-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
