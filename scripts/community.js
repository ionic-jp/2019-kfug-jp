export const contents = {
  company: require(`json-loader!yaml-loader!./contents/sponsors.yml`).sponsors,
  community: require(`json-loader!yaml-loader!./contents/communities.yml`).communities,
};
