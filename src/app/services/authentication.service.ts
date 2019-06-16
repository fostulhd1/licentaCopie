import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private fa: AngularFireAuth) {
    }

    registerUser(value) {
        return new Promise<any>((resolve, reject) => {
            this.fa.auth.createUserWithEmailAndPassword(value.email, value.password)
                .then(
                    res => resolve(res),
                    err => reject(err))
        });
    }

    loginUser(value) {
        return new Promise<any>((resolve, reject) => {
            this.fa.auth.signInWithEmailAndPassword(value.email, value.password)
                .then(
                    res => resolve(res),
                    err => reject(err))
        });
    }

    logoutUser() {
        return new Promise((resolve, reject) => {
            if (this.fa.auth.currentUser) {
                this.fa.auth.signOut()
                    .then(() => {
                        resolve();
                    }).catch((error) => {
                    reject();
                });
            }
        });
    }

    userDetails() {
        return this.fa.auth.currentUser;
    }

}
