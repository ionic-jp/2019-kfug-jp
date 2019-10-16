const speakers = [
 "izumi",
 "sayanaka",
 "kamiyam",
];

const speakersList = speakers.map(speaker => {
  const speakerInfo = require(`json-loader!yaml-loader!./${speaker}.yml`)
  speakerInfo.key = speaker
  return speakerInfo;
});

export const contents = () => speakersList;
