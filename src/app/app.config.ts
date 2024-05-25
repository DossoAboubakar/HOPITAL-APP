import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FIREBASE_OPTIONS } from '@angular/fire/compat'
import { firebaseConfig } from '../firebase.config'
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
    provideAnimations(),
    
    provideClientHydration()]
};
