import * as actionTypes from 'redux/actions/actionTypes';
import { GiftsRequestClient } from 'services/giftsRequestClient';
import * as restApiAction from 'redux/actions/restApiAction';

const giftsRequestClient = new GiftsRequestClient();

export const fetchGifts = (data) => ({
  type: actionTypes.FETCH_GIFTS,
  payload: data,
});
export const onChangePageGifts = (pageIndex) => ({
  type: actionTypes.ON_CHANGE_PAGE_GIFT,
  payload: pageIndex,
});

export const fetchGiftsRequest = (param) => {
  return async (dispatch) => {
    dispatch(restApiAction.genRequestLoadingAction());
    try {
      const response = await giftsRequestClient.fetchGifts(param);
      dispatch(fetchGifts(response));
      dispatch(restApiAction.genRequestLoadingAction());
    } catch (e) {
      dispatch(restApiAction.genRequestFinishAction());
    } finally {
      dispatch(restApiAction.genRequestFinishAction());
    }
  };
};
