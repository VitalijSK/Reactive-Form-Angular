import { Component } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector : 'app-form-add',
    templateUrl : './form-add.component.html',
    providers: [
        FormBuilder
      ]
})

export class FormAddComponent {
    constructor(private fb: FormBuilder) { }
    profileForm = this.fb.group({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
      });
    onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    }
}