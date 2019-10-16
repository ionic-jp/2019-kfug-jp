import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDataJson, IGroups, ISession } from '../interfaces/data.json';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root',
})
export class ConferenceData {
  data: any;

  constructor(public http: HttpClient, public user: UserData) {}

  load() {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http.get<IDataJson>('assets/data/data.json').pipe(map(this.processData, this));
    }
  }

  processData(data: IDataJson) {
    this.data = data;
    return this.data;
  }

  getTimeline(dayIndex: number, queryText = '', segment = 'all') {
    return this.load().pipe(
      map((data: IDataJson) => {
        const day = data.schedule[dayIndex];
        day.shownSessions = 0;

        queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
        const queryWords = queryText.split(' ').filter(w => !!w.trim().length);

        day.groups.forEach((group: IGroups) => {
          group.hide = true;

          group.sessions.forEach((session: ISession) => {
            this.filterSession(session, queryWords, segment);
            session.isFavorite = this.user.hasFavorite(session.id);
            if (!session.hide) {
              group.hide = false;
              day.shownSessions++;
            }
          });
        });

        return day;
      }),
    );
  }

  filterSession(session: ISession, queryWords: string[], segment: string) {
    let matchesQueryText = false;
    if (queryWords.length) {
      queryWords.forEach((queryWord: string) => {
        if (session.name.toLowerCase().indexOf(queryWord) > -1) {
          matchesQueryText = true;
        }
      });
    } else {
      matchesQueryText = true;
    }

    let matchesSegment = false;
    if (segment === 'favorites') {
      if (this.user.hasFavorite(session.name)) {
        matchesSegment = true;
      }
    } else {
      matchesSegment = true;
    }

    session.hide = !(matchesQueryText && matchesSegment);
  }

  getSpeakers() {
    return this.load().pipe(map((data: any) => data.speakers));
  }
}
