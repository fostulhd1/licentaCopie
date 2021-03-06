import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {environment} from 'src/environments/environment';
import {AuthenticationService} from './services/authentication.service';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule, FirebaseApp} from '@angular/fire';

import {ReactiveFormsModule} from '@angular/forms';


import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        ReactiveFormsModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireDatabaseModule],
    providers: [
        StatusBar,
        SplashScreen,
        FirebaseApp,
        AuthenticationService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
