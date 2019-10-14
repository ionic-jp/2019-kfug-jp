const speakers = [
  "onoueyosuke",
  "taguchiwataru",
  "matsushitaeri",
  "kojimadaiki",
  "jimboyoshihide",
  "suzukitakayuki",
  "hamadamasanari",
  "okitakanori",
  // "maedakeisuke",
  "sakakibaramasahiko",
  "hiranomasashi",
  "yamashitakazuki",
  "kirillvasiltsov",
  "onishiyuji",
  "conti",
  "hanatanitakuma",
  "okunokentaro",
  "kawamatayuga",
  "mikakane",
];

const speakersList = speakers.map(speaker => {
  const speakerInfo = require(`json-loader!yaml-loader!./${speaker}.yml`);
  speakerInfo.key = speaker;
  return speakerInfo;
});

export const contents = () => speakersList;
