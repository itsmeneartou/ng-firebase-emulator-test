import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {
  AngularFireFunctionsModule,
} from "@angular/fire/functions";
import { AngularFirestoreModule, } from "@angular/fire/firestore";

import { AngularFireDatabaseModule } from "../../node_modules/@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { ServiceWorkerModule } from "@angular/service-worker";
import { FirebaseUIModule, firebase, firebaseui } from "firebaseui-angular";
import { HttpClientModule } from "@angular/common/http";
import { USE_EMULATOR as USE_AUTH_EMULATOR } from "@angular/fire/auth";
import { USE_EMULATOR as USE_DATABASE_EMULATOR } from "@angular/fire/database";
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from "@angular/fire/firestore";
import { USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from "@angular/fire/functions";
const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  tosUrl: "https://www.workern.com/app/f/terms",
  privacyPolicyUrl: "https://www.workern.com/app/f/privacy",
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAtVokfYQcISY2yPF31BCSpIt2m1cMVT3o",
      authDomain: "ng-firebase-emulator-test.firebaseapp.com",
      databaseURL: "https://ng-firebase-emulator-test.firebaseio.com",
      projectId: "ng-firebase-emulator-test",
      storageBucket: "ng-firebase-emulator-test.appspot.com",
      messagingSenderId: "1089780204036",
      appId: "1:1089780204036:web:3ac8b339c605f7019ceb51"
    }),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    AngularFireFunctionsModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: USE_AUTH_EMULATOR,
      useValue: true ? ["localhost", 9099] : undefined,
    },
    {
      provide: USE_DATABASE_EMULATOR,
      useValue: true ? ["localhost", 9000] : undefined,
    },
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: true ? ["localhost", 8080] : undefined,
    },
    {
      provide: USE_FUNCTIONS_EMULATOR,
      useValue: true ? ["localhost", 5001] : undefined,
    },
  ],
  entryComponents: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
