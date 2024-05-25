import { CanActivateFn ,Router } from '@angular/router';
import { inject } from '@angular/core';
import { ConnexionFormComponent } from '../components/login/connexion-form.component';
import { AuthService } from '../services/auth.service';
export const routesGuardGuard: CanActivateFn = (route, state):boolean => {
  const authService = inject(AuthService); 
  const router = inject(Router)
  const userIslogged = authService.userIsLogged
  if(userIslogged){
    console.log('userIslogged:',userIslogged)
    return true;
  }
  else{
    router.navigate(['/login'])
    return false
  }
};
