import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'test-bab4f',
          appId: '1:396895807629:web:0a92cf19114a22d0855ac4',
          storageBucket: 'test-bab4f.appspot.com',
          apiKey: 'AIzaSyBciGGfqaV8JGBf3C2wK2eq-rH_k_vyqnw',
          authDomain: 'test-bab4f.firebaseapp.com',
          messagingSenderId: '396895807629',
          measurementId: 'G-XC7WSHWBYV',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
  ],
};
