import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export const RegisterForm = {
  name: [null, [Validators.required, Validators.maxLength(50)]],
  surName: [null, [Validators.required, Validators.maxLength]],
  birthDate: [null, [notAfterToday]],
  nationality: ['BE'],
  ssn: [null, [Validators.required, Validators.pattern(/^\d{2}\.\d{2}\.\d{2}-\d{3}\.\d{2}$/)]],
  departement: [null],
  job: [null],
  tattooed: [false],
}

function notAfterToday(control: AbstractControl) : ValidationErrors | null {
  const value = control.value;
  if(!value) {
    return null;
  }
  const dateValue = new Date(value);
  if(!dateValue) {
    return null;
  }
  if(dateValue > new Date()) {
    return { notAfterToday: true };
  }
  return null;
}