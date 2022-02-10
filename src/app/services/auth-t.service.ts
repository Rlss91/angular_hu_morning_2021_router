import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthTService {
  isLoggedInT: boolean;
  constructor() {
    this.isLoggedInT = false;
  }

  isAuthT(): boolean {
    return this.isLoggedInT;
  }

  loginT(emailT: string, passwordT: string): boolean {
    this.isLoggedInT = true;
    return true;
  }
}
