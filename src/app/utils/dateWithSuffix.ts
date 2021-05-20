import formatDate from './formatDate';

const daySuffix = (i: number) => {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return i + 'st';
  }
  if (j === 2 && k !== 12) {
    return i + 'nd';
  }
  if (j === 3 && k !== 13) {
    return i + 'rd';
  }
  return i + 'th';
  // https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number/13627586
};

export default (date: string) => {
  const dateDay = formatDate(date, 'd');
  const dateMonth = formatDate(date, 'MMM');
  if (dateDay && dateMonth) {
    date = `${daySuffix(parseInt(dateDay))} ${dateMonth}`;
  }
  return date;
};
