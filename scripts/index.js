import { contents as speakers } from './contents/speakers/speakers'
import { contents as handson } from './contents/handson/handson'
import { contents as community } from './community'

const groups = [
  {
    time: '11:00',
    sessionKey: ['onoueyosuke', 'yamashitakazuki', 'taguchiwataru', 'izumi']
  },
  {
    time: '11:45',
    sessionKey: ['okunokentaro', 'sakakibaramasahiko', 'kawamatayuga']
  },
  {
    time: '12:30',
    sessionKey: ['sayanaka']
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
    time: '13:45',
    sessionKey: ['kamiyam']
  },
  {
    time: '14:30',
    sessionKey: ['maedakeisuke', 'jimboyoshihide']
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
  const sessionGroup = speakers().concat(handson());
  return {
    time: group.time,
    sessions: group.sessionKey.map(key => {
      return sessionGroup
        .map(s => {
          return {
            name: s.session.title,
            description: s.session.detail,
            speakers: [
              {
                name: s.name,
                image: s.image,
              }
            ],
            timeStart: group.time,
            timeEnd: group.end,
            location: s.hall,
            id: s.key,
            tracks: ['type-' + s.hall.slice(0, 1).toLowerCase()],
          };
        })
        .find(s => s.id === key)
    })
  }
});

const data = {
  schedule: [{
    date: "firstDay",
    groups: sessions,
  }],
  speakers: speakers().concat(handson()),
  tracks: []
};

writeFile("./src/assets/data/data.json", JSON.stringify(data, null , "  "));
writeFile("./src/assets/data/community.json", JSON.stringify(community, null , "  "));
