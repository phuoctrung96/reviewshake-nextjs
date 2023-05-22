type MonthNames = {
  [key: string]:
    | 'Jan'
    | 'Feb'
    | 'Mar'
    | 'Apr'
    | 'May'
    | 'Jun'
    | 'Jul'
    | 'Aug'
    | 'Sep'
    | 'Oct'
    | 'Nov'
    | 'Dec';
};

export const monthNames: MonthNames = {
  '0': 'Jan',
  '1': 'Feb',
  '2': 'Mar',
  '3': 'Apr',
  '4': 'May',
  '5': 'Jun',
  '6': 'Jul',
  '7': 'Aug',
  '8': 'Sep',
  '9': 'Oct',
  '10': 'Nov',
  '11': 'Dec',
};

export const formatDate = (date: Date): string => {
  const dateSettings: Intl.DateTimeFormatOptions = {
    dateStyle: 'medium',
    timeStyle: undefined,
  };

  return new Intl.DateTimeFormat('en-GB', dateSettings).format(date);
};

export const getLastSixMonths = () => {
  const today = new Date();
  let lastSixMonths = [];

  for (var i = 6; i > 0; i -= 1) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    lastSixMonths.push(monthNames[d.getMonth().toString() as keyof typeof monthNames]);
  }
  return lastSixMonths;
};

export const getDaysAgo = (date: Date | undefined) => {
  if (!date) return;

  const dateNow = new Date();
  const dateThen = new Date(date);
  const diff = dateNow.getTime() - dateThen.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return days;
};
