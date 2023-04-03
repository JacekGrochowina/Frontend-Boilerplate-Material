import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { InputTypeAttribute } from './types/input.type';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { distinctUntilChanged, Subject, takeUntil, tap } from 'rxjs';
import { ValidationService } from "../../services/validation.service";

@Component({
  selector: 'app-input',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit, ControlValueAccessor {
  protected required = false;
  private destroy$ = new Subject<void>();

  @ViewChild(FormControlDirective, { static: true }) formControlDirective!: FormControlDirective;

  @Input() appearanceAttribute: MatFormFieldAppearance = 'fill';
  @Input() typeAttribute: InputTypeAttribute = 'text';
  @Input() label!: string | null;
  @Input() formControl!: FormControl;
  @Input() formControlName!: string;
  @Output() clear = new EventEmitter();

  protected _minAttribute!: number;
  protected _maxAttribute!: number;

  constructor(
    private controlContainer: ControlContainer,
    private validationService: ValidationService
  ) {}

  @Input() set minAttribute(value: number) {
    if (this.typeAttribute === 'number') {
      this._minAttribute = value;
    }
  }

  @Input() set maxAttribute(value: number) {
    if (this.typeAttribute === 'number') {
      this._maxAttribute = value;
    }
  }

  protected get control(): FormControl {
    return this.formControl || this.controlContainer.control?.get(this.formControlName);
  }

  protected get error(): null | undefined {
    return this.validationService.getErrorMessage(this.control);
  }

  public ngOnInit() {
    this.required = this.control.hasValidator(Validators.required);
    this.handleControlStatusChanges().pipe(takeUntil(this.destroy$)).subscribe();
  }

  public registerOnChange(fn: unknown) {
    this.formControlDirective.valueAccessor?.registerOnChange(fn);
  }

  public registerOnTouched(fn: unknown) {
    this.formControlDirective.valueAccessor?.registerOnTouched(fn);
  }

  public setDisabledState(isDisabled: boolean) {
    if (this.formControlDirective.valueAccessor?.setDisabledState) {
      this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
    }
  }

  public writeValue(value: unknown) {
    this.formControlDirective.valueAccessor?.writeValue(value);
  }

  protected clearValue(): void {
    this.control.reset();
    this.clear.emit();
  }

  private handleControlStatusChanges() {
    return this.control.statusChanges.pipe(
      distinctUntilChanged(),
      tap(() => {
        this.required = this.control.hasValidator(Validators.required);
      })
    );
  }
}
