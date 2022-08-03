import numeral from 'numeral';

export const numberToLetter = (num) => {
  return numeral(num).format('1a');
};
