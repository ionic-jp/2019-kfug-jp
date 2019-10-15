import { contents as speakers } from './contents/speakers/speakers'
// import { contents as sponsors } from 'contents/sponsors/sponsors'

const groups = [
  {
    time: '11:00',
    end: '11:40',
    sessionKey: ['onoueyosuke', 'yamashitakazuki', 'taguchiwataru']
  },
  {
    time: '11:45',
    end: '12:25',
    sessionKey: ['okunokentaro', 'sakakibaramasahiko', 'kawamatayuga']
  },
  {
    time: '13:00',
    end: '13:40',
    sessionKey: ['matsushitaeri', 'conti', 'kojimadaiki']
  },
  {
    time: '13:45',
    end: '14:25',
    sessionKey: ['kirillvasiltsov', 'suzukitakayuki']
  },
  {
    time: '14:30',
    end: '15:10',
    sessionKey: ['jimboyoshihide']
  },
  {
    time: '15:15',
    end: '15:55',
    sessionKey: ['hanatanitakuma', 'okitakanori', 'hamadamasanari']
  },
  {
    time: '16:00',
    end: '16:40',
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
      return speakers()
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
  speakers: speakers(),
  tracks: [
    {
      "name": "Angular",
      "icon": "logo-angular"
    },
    {
      "name": "Documentation",
      "icon": "document"
    },
    {
      "name": "Food",
      "icon": "restaurant"
    },
    {
      "name": "Ionic",
      "icon": "logo-ionic"
    },
    {
      "name": "Tooling",
      "icon": "hammer"
    },
    {
      "name": "Design",
      "icon": "color-palette"
    },
    {
      "name": "Services",
      "icon": "cog"
    },
    {
      "name": "Workshop",
      "icon": "construct"
    },
    {
      "name": "Communication",
      "icon": "call"
    },
    {
      "name": "Navigation",
      "icon": "compass"
    }
  ]
};

writeFile("./src/assets/data/data.json", JSON.stringify(data, null , "  "));
