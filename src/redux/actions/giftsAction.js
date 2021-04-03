import * as actionTypes from 'redux/actions/actionTypes';
import { GiftsRequestClient } from 'services/giftsRequestClient';
import * as restApiAction from 'redux/actions/restApiAction';

const giftsRequestClient = new GiftsRequestClient();

export const fetchGifts = (data) => ({
  type: actionTypes.FETCH_GIFTS,
  payload: data,
});

export const fetchGiftsRequest = (param) => {
  return async (dispatch) => {
    dispatch(restApiAction.genRequestLoadingAction());
    try {
      const response = await giftsRequestClient.fetchGifts(param);
      dispatch(fetchGifts(response));
      dispatch(restApiAction.genRequestLoadingAction());
    } catch (e) {
      console.log('error fetch: ', e);
    } finally {
      dispatch(restApiAction.genRequestFinishAction());
      console.log(' end fetchGifts');
    }
  };
};
