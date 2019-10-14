import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  _favorites: string[] = [];

  constructor(public events: Events, public storage: Storage) {}

  hasFavorite(sessionName: string): boolean {
    return this._favorites.indexOf(sessionName) > -1;
  }

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  }
}
