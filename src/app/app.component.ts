import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-emulator-test';
  isSignedIn:boolean = false;
  signInStateMessage:string = 'I am signed out currently.'
  onSuccessfulAuth($event:any){
    console.log($event);
    if($event.authResult.user!=null)this.isSignedIn = true;
  }
  constructor(private afAuth:AngularFireAuth){
    afAuth.signOut();
    afAuth.authState.subscribe(user=>{
      if(user!=null)this.signInStateMessage = "I am signed in currently";
      else this.signInStateMessage = "I am signed out currently."
    })
  }
}
