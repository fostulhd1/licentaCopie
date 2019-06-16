import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterPage} from './register.page';

import {DebugElement} from '@angular/core';
import {BrowserModule, By} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {IonicModule, NavController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/database";

describe('RegisterPage', () => {
    let component: RegisterPage;
    let fixture: ComponentFixture<RegisterPage>;

    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],

            imports: [
                BrowserModule,
                ReactiveFormsModule,
                FormsModule,
                IonicModule,
                AngularFireAuthModule,
                AngularFireModule.initializeApp(environment.firebase),
                AngularFirestoreModule,
                AngularFireDatabaseModule,
                RouterTestingModule
            ],
            providers: [FormBuilder, AngularFireAuth]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterPage);
        component = fixture.componentInstance;
        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have title Register', () => {
        expect(component.title).toEqual('Register');
    });

    it('form invalid when empty', () => {
        component.validations_form.controls['email'].setValue('');
        component.validations_form.controls['password'].setValue('');
        expect(component.validations_form.valid).toBeFalsy();
    });

    it('form should be valid ', () => {
        component.validations_form.controls['email'].setValue('abc@abc.com');
        component.validations_form.controls['password'].setValue('12345678');
        expect(component.validations_form.valid).toBeTruthy();
    });

    it('email field validity', () => {
        let errors = {};
        let email = component.validations_form.controls['email'];
        expect(email.valid).toBeFalsy();

        // Email field is required
        errors = email.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set email to something
        email.setValue("test");
        errors = email.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['pattern']).toBeTruthy();

        // Set email to something correct
        email.setValue("test@example.com");
        errors = email.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['pattern']).toBeFalsy();
    });

    it('password field validity', () => {
        let errors = {};
        let password = component.validations_form.controls['password'];

        // Password field is required
        errors = password.errors || {};
        expect(errors['required']).toBeTruthy();

        // Set password to something
        password.setValue("1234");
        errors = password.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeTruthy();

        // Set password to something correct
        password.setValue("12345");
        errors = password.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeFalsy();
    });

    it('should be able to launch login page', () => {

        let navCtrl = fixture.debugElement.injector.get(NavController);
        spyOn(navCtrl, 'navigateBack');

        de = fixture.debugElement.query(By.css('a'));

        de.triggerEventHandler('click', null);

        expect(navCtrl.navigateBack).toHaveBeenCalledWith('');

    });

});
