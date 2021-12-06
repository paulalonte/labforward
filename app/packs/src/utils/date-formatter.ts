// eslint-disable-next-line import/prefer-default-export
export const formatDate = (date: Date): string => {
  const d = new Date(date);

  return d.toLocaleString('de-DE', { timeZone: 'CET' });
};
