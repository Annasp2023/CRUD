import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ViatgesComponent } from './pages/viatges/viatges.component';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['viatges']);

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    /* ...canActivate(redirectLoggedInToHome), */
  },
  {
    path: 'viatges',
    component: ViatgesComponent,
    /* ...canActivate(redirectUnauthorizedToLogin), */
  },
  { path: '**', redirectTo: 'login' },
];
