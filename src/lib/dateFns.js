import format from 'date-fns/format';

export const formatDate = (date, formatString) => format(date, formatString);

export const FORMAT_STRINGS = {
  date: ' MMM d, yyyy',
};
