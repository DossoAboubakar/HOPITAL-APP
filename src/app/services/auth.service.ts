import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userIsLogged: boolean = false;
  constructor(private auth:AngularFireAuth ,private router :Router) { }

  register(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('user',email,password)
        alert('Enregistrer avec Succes');
        this.router.navigate(['/login']);
      })
      .catch(() => {
        alert('Echec d\'enregistrement veuillez ressayer');
        this.router.navigate(['/register']);
      });
  }
  authenticate(email: string, password: string){
    console.log('user',email,password)
      this.auth.signInWithEmailAndPassword(email, password)
         .then(() => {
          console.log('auhtentification succes')
           this.router.navigate(['/dashboard']);
           this.userIsLogged = true
         })
         .catch(() => {
          console.log('auhtentification failed')
           alert('veuillez verifier vos coordonnées');
           this.router.navigate(['/login']);
         })
  }
  

}
