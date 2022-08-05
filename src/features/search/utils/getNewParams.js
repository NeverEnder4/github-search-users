export const getNewParams = ({ queryTerm, first, values }) => {
  let q = `${queryTerm}`;
  let f;

  if (values.sortBy && values.sortBy !== 'best_match') q += ` sort:${values.sortBy}`;
  if (values.reposGreaterThan) q += ` repos:>${values.reposGreaterThan}`;
  if (values.followersGreaterThan) q += ` followers:>${values.followersGreaterThan}`;
  if (values.perPage) f = values.perPage;
  else f = first;

  return { q, f };
};
