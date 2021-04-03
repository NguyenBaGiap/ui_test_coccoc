import moment from 'moment';
import { DATE_DD_MM_YY } from 'utilities/Constants';

export const requiredPointFormat = (currency) => {
  if (Number.isFinite(currency)) {
    const _tmp = currency.toString();
    return _tmp.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
    return currency;
  }
};

export const generateSubTitleCard = (card) => {
  return `Hiệu lực: ${moment(card.activeTimeFrom).format(
    DATE_DD_MM_YY
  )} - ${moment(card.activeTimeTo).format(DATE_DD_MM_YY)}`;
};
