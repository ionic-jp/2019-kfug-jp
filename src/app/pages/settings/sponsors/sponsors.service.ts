import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ICommunityData {
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

@Injectable({
  providedIn: 'root',
})
export class SponsorsService {
  constructor(public http: HttpClient) {}

  getCommunityList(): Observable<ICommunityData> {
    return this.http.get<ICommunityData>('assets/data/community.json');
  }
}
