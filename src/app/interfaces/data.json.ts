export interface IDataJson {
  schedule: ISchedule[];
  speakers: ISpeaker;
}

export interface ISchedule {
  date: string;
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
  speakers?: string[];
  speakerNames: string[];
  speakerPics: string[];
  timeStart: string;
  timeEnd: string;
  location: string;
  id: string;
  tracks: string[];
  hide?: boolean;
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
