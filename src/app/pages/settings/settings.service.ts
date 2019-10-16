import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface ISponsorData {
  company: ICompany[];
  community: ICommunity[];
}

export interface ICompany {
  name: string;
  rank: string;
  key: string;
  url: string;
}

export interface ICommunity {
  name: string;
  key: string;
  detail: string;
  image: string;
  link: string;
}

export interface ILicense {
  name: string;
  license: string;
  repository: string;
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  sponsorData: ISponsorData;
  licenseData: ILicense[];
  constructor(public http: HttpClient) {}

  getSponsorList(): Observable<ISponsorData> {
    if (this.sponsorData) {
      return of(this.sponsorData);
    } else {
      return this.http.get<ISponsorData>('assets/data/community.json').pipe(tap(data => (this.sponsorData = data)));
    }
  }

  getLicenses(): Observable<ILicense[]> {
    if (this.licenseData) {
      return of(this.licenseData);
    } else {
      return this.http.get<ILicense[]>('assets/data/licenses.json').pipe(tap(data => (this.licenseData = data)));
    }
  }
}
