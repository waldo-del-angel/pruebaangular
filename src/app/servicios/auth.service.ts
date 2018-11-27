import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
//import { AngularFirestore } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';
//import * as firebase from '@firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  /**
   * Metodo de registro de usuarios.
   * @param email Es el email del usuario a registras.
   * @param pass Es la contraseña del usuario a crear.
   */
  registroUsuario(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then((userData)=>resolve(userData), err => reject(err));
    } );
  }

  /**
   * Método para logueo de usuarios.
   * @param email Es el email del usuario que desea loguearse.
   * @param pass Es el password del usuario que desea loguerase.
   */
  loginUsuario(email: string, pass: string) {
    /*return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then((userData)=>resolve(userData), err => reject(err));
    } );*/
  }

  getDatosUsuario() {
    //return this.afAuth.auth.onAuthStateChanged(user=>user);
  }

  /**
   * Método de logueo
   */
  logout() {
    //return this.afAuth.auth.signOut();
  }
}
