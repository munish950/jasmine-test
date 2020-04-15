import { ContactFormComponent } from './contact-form.component';
import { FormBuilder } from '@angular/forms';

describe('Validate Contact Form', () => {
    let contactComponent:  ContactFormComponent;
    beforeEach(() => {
        contactComponent = new ContactFormComponent(new FormBuilder());
    });

    it('Contact form contain 2 form fields', () => {
        expect(contactComponent.contactForm.contains('name')).toBeTruthy();
        expect(contactComponent.contactForm.contains('email')).toBeTruthy();
        expect(contactComponent.contactForm.contains('contact')).toBeTruthy();
    });

    it('Should make name control required', () => {
        const contactFormName = contactComponent.contactForm.get('name');
        contactFormName.setValue('');
        expect(contactFormName.valid).toBeFalsy();
    });

    it('Should make email control required and validated', () => {
        const contactFormEmail = contactComponent.contactForm.get('email');
        contactFormEmail.setValue('');
        expect(contactFormEmail.valid).toBeFalsy();
    });

    it('Should contain column contact with length equal to 10', () => {
        const contactControl = contactComponent.contactForm.get('contact');

        contactControl.setValue('abcdefgh');
        expect(contactControl.valid).toBeFalsy();

        contactControl.setValue('abcdefghijkl');
        expect(contactControl.valid).toBeFalsy();

    });


});
