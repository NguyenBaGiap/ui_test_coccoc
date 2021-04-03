import * as actionTypes from 'redux/actions/actionTypes';
import { HOME_SORT_BY } from 'utilities/Constants';
import { IS_MOBILE, GIFT_SHOW_PAGE } from 'utilities/Ui';
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
  giftPageList: [],
  giftPageIndex: 1,
  totalPageGift: 0,
  totalGift: 0,
};

const GIFTS_SHOW = GIFT_SHOW_PAGE();
export const giftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GIFTS:
      const gifts = [...action.payload];
      const totalPageGift = Math.ceil(gifts.length / GIFTS_SHOW);
      const giftPageList = gifts.slice(0, GIFTS_SHOW).map((item) => ({
        ...item,
        imageUrl: item.imageUrl,
        subTitle: generateSubTitleCard(item),
        requiredPoints: requiredPointFormat(item.requiredPoints),
      }));
      const initialValuesForm = {
        ...state.initialValuesForm,
        all: gifts.length > 0,
      };

      return {
        ...state,
        initialValuesForm,
        giftPageList,
        gifts,
        totalPageGift: totalPageGift,
        totalGift: gifts.length,
      };

    case actionTypes.ON_CHANGE_PAGE_GIFT:
      const giftPageIndex = action.payload;
      const items = [...state.gifts];
      const size = items.length;
      const indexFrom = (giftPageIndex - 1) * GIFTS_SHOW;
      const indexTo =
        GIFTS_SHOW * giftPageIndex > size ? size : GIFTS_SHOW * giftPageIndex;
      const giftPage = items.slice(indexFrom, indexTo).map((item) => ({
        ...item,
        imageUrl: item.imageUrl,
        subTitle: generateSubTitleCard(item),
        requiredPoints: requiredPointFormat(item.requiredPoints),
      }));
      return {
        ...state,
        giftPageIndex,
        giftPageList: giftPage,
      };
    default:
      return state;
  }
};
