import { AbstractControl } from '@angular/forms'

export class CustomValidators {

static emailDomain(domaineName: string){ 
    return (control: AbstractControl): {[key: string]: any} | null => {
        const email: string = control.value;
        const domain = email.substring(email.lastIndexOf('#') + 1);
        if (email === '' || domain.toLocaleLowerCase() === domaineName.toLowerCase()) {
            return null;
    } else {
      return { 'emailDomain': true };
    }
  };
 }

}