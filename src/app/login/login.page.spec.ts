import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login.page';

import { DebugElement } from '@angular/core';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

      imports:[
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      IonicModule,
      RouterTestingModule
      ],
      providers:[FormBuilder]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title Login', () => {
    expect(component.title).toEqual('Login');
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
  
});

