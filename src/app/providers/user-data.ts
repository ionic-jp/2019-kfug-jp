import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  constructor() {}

  hasFavorite(sessionName: string): boolean {
    if (!sessionName) {
      return false;
    }
    return sessionName in localStorage;
  }

  addFavorite(sessionName: string): void {
    localStorage[sessionName] = true;
  }

  removeFavorite(sessionName: string): void {
    localStorage.removeItem(sessionName);
  }
}
