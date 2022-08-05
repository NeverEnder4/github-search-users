export const getFilters = (query) => {
  const filters = {};

  query.split(' ').forEach((item) => {
    const [term, value] = item.split(':');

    const setFilter = () => {
      filters[term] = value;
    };

    if (term === 'repos') setFilter();
    else if (term === 'followers') setFilter();
    else if (term === 'sort') setFilter();
  });

  return filters;
};
