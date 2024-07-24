import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore } from 'firebase/firestore';
import * as firebase from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//import { Auth, signInWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  
  // async googleSignIn() {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   const credential = await this.afAuth.signInWithPopup(provider);
  //   return credential.user;
  // }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return credential.user;
  }

  signOut() {
    return this.afAuth.signOut();
  }
  getUser() {
    return this.afAuth.authState;
  }
}
