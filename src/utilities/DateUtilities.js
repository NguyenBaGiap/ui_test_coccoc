import moment from 'moment';

export const convertMillisecondToDate = (millisecond, format) => {
  return moment(millisecond).format(format);
};
