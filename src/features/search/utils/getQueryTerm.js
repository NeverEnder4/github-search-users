export const getQueryTerm = (query) => {
  const queryTermArray = [];

  query.split(' ').forEach((item) => {
    const [term] = item.split(':');

    if (term !== 'repos' && term !== 'followers' && term !== 'sort') {
      queryTermArray.push(term);
    }
  });

  return queryTermArray.join(' ');
};
