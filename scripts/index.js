import { contents as speakers } from './contents/speakers/speakers'
// import { contents as sponsors } from 'contents/sponsors/sponsors'

const groups = [
  {
    time: '11:00',
    sessionKey: ['onoueyosuke', 'yamashitakazuki', 'taguchiwataru']
  },
  {
    time: '11:45',
    sessionKey: ['okunokentaro', 'sakakibaramasahiko', 'kawamatayuga']
  },
  {
    time: '13:00',
    sessionKey: ['matsushitaeri', 'conti', 'kojimadaiki']
  },
  {
    time: '13:45',
    sessionKey: ['kirillvasiltsov', 'suzukitakayuki']
  },
  {
    time: '14:30',
    sessionKey: ['jimboyoshihide']
  },
  {
    time: '15:15',
    sessionKey: ['hanatanitakuma', 'okitakanori', 'hamadamasanari']
  },
  {
    time: '16:00',
    sessionKey: ['hiranomasashi', 'onishiyuji', 'mikakane']
  }
];

const fs = require('fs');
const writeFile = (path, data) => {
  fs.writeFile(path, data,  (err) => {
    if (err) {
      throw err;
    }
  });
};

const sessions = groups.map(group => {
  return {
    time: group.time,
    sessions: group.sessionKey.map(key => {
      return speakers().find(s => s.key === key )
    })
  }
});

const data = {
  schedule: {
    date: "first",
    groups: sessions,
  },
  speakers: speakers(),
  tracks: [],
};

writeFile("./src/assets/data/data.json", JSON.stringify(data));
