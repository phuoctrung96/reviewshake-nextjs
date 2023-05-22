export const shortenNumber = (num: number, limit: number): string | number => {
  if (num >= 1000000) {
    return Math.round(num / 1000000) + 'M';
  }

  return num >= limit ? Math.round(num / 1000) + 'k' : num;
};

export const formatNumber = (num: number): string => {
  let nf = new Intl.NumberFormat('en-US');

  return nf.format(num);
};

export const getPercentageIncrease = (current: number, previous: number) => {
  return Math.abs(Math.round(((current - previous) / previous) * 100));
};

export const getPercentageDecrease = (current: number, previous: number) => {
  return Math.abs(Math.round(((previous - current) / previous) * 100));
};
