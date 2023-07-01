import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor() { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {
      if(email === 'rod@mail.com'){
        subscriber.next({emailTaken: true});
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();
    }).pipe( delay(3000) );
    return httpCallObservable;
  }
  /*validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;

    return of({
      emailTaken: true
    }).pipe( delay(2000) );
  }*/
  /*registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }*/
}
