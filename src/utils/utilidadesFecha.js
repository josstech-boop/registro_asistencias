export const formatDate = (date, locale = 'es-ES') => {
  return new Intl.DateTimeFormat(locale).format(new Date(date));
};

export const formatDateTime = (date, locale = 'es-ES') => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date));
};

export default { formatDate, formatDateTime };
