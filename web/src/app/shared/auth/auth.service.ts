import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    return true;
  }

}
