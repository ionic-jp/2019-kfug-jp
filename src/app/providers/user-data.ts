import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  constructor(public events: Events, public storage: Storage) {}

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
