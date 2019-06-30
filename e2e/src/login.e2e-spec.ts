import { AppPage } from './page-objects/app.po';
import { LoginPage } from './page-objects/login.po';
import { RegisterPage } from './page-objects/register.po';

describe('Login', () => {
    const app = new AppPage();
    const login = new LoginPage();
    const register = new RegisterPage();

    beforeEach(() => {
        app.load();
    });

    describe('before logged in', () => {
        it('displays the login screen', () => {
            expect(login.rootElement().isDisplayed()).toEqual(true);
        });

        it('allows in-app navigation to register', () => {
            login.clickGotoRegister();
            register.waitUntilVisible();
            login.waitUntilInvisible();
        });
        //
        // it('does not allow in-app navigation to tasks', () => {
        //     menu.clickTasks();
        //     app.waitForPageNavigation();
        //     expect(login.rootElement().isDisplayed()).toEqual(true);
        // });
        //
        // it('does not allow in-app navigation to customers', () => {
        //     menu.clickCustomers();
        //     app.waitForPageNavigation();
        //     expect(login.rootElement().isDisplayed()).toEqual(true);
        // });
        //
        // it('displays an error message if the login fails', () => {
        //     login.enterEMail('test@test.com'test@test.com');
        //     login.enterPassword('bogus');
        //     login.clickSignIn();
        //     login.waitForError();
        //     expect(login.getErrorMessage()).toEqual(
        //         'The password is invalid or the user does not have a password.'
        //     );
        // });
        //
        // it('navigates to the tasks page if the login succeeds', () => {
        //     login.enterEMail('test@test.com'test@test.com');
        //     login.enterPassword('testtest');
        //     login.clickSignIn();
        //     tasks.waitUntilVisible();
        // });
    });

    // describe('once logged in', () => {
    //     beforeEach(() => {
    //         tasks.waitUntilVisible();
    //     });
    //
    //     it('allows navigation to the customers page', () => {
    //         menu.clickCustomers();
    //         customers.waitUntilVisible();
    //         tasks.waitUntilInvisible();
    //     });
    //
    //     it('allows navigation to the about page', () => {
    //         menu.clickAbout();
    //         about.waitUntilVisible();
    //         tasks.waitUntilInvisible();
    //     });
    //
    //     it('allows navigation back to the tasks page', () => {
    //         menu.clickAbout();
    //         tasks.waitUntilInvisible();
    //         menu.clickTasks();
    //         tasks.waitUntilVisible();
    //     });
    // });
});
