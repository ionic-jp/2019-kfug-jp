export interface IDataJson {
  schedule: ISchedule[];
  speakers: ISpeaker[];
}

export interface ISchedule {
  date: string;
  shownSessions?: number;
  groups: IGroups[];
}

export interface IGroups {
  time: string;
  sessions: ISession[];
  hide?: boolean;
}

export interface ISession {
  name: string;
  description: string;
  speakers: {
    name: string;
    image: string;
  }[];
  timeStart: string;
  location: string;
  id: string;
  tracks: string[];
  hide?: boolean;
  isFavorite?: boolean | null;
}

export interface ISpeaker {
  name: string;
  company: string;
  hall: string;
  time: string;
  detail: string;
  image: string;
  twitter: string;
  facebook: string;
  link: string;
  session: {
    title: string;
    detail: string;
  };
  key: string;
}
