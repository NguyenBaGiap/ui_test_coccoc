import * as actionTypes from 'redux/actions/actionTypes';
import { HOME_SORT_BY } from 'utilities/Constants';
import { generateSubTitleCard, requiredPointFormat } from 'utilities/Ui';

const initialState = {
  initialValuesForm: {
    all: false,
    voucher: false,
    cardMobile: false,
    gift: false,
    sortBy: HOME_SORT_BY[0],
  },
  gifts: [],
  giftsIndex: 1,
  totalGifts: 0,
};

export const giftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GIFTS:
      if (action.payload.length > 0) {
        const lists = action.payload; // .slice(0, size)
        const gifts = lists.slice(0, 8).map((item) => ({
          ...item,
          imageUrl: item.imageUrl,
          subTitle: generateSubTitleCard(item),
          requiredPoints: requiredPointFormat(item.requiredPoints),
        }));
        const initialValuesForm = {
          ...state.initialValuesForm,
          all: true,
        };
        return {
          ...state,
          initialValuesForm,
          gifts,
          totalGifts: gifts.length,
        };
      }
      return {
        ...state,
        gifts: action.payload,
        totalGifts: action.payload.length,
      };

    default:
      return state;
  }
};
