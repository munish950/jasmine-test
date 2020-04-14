import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
    contactForm: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.contactForm = formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required]
        });
    }
}
