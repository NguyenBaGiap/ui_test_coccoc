import {
  REQUEST_LOADING_STATUS,
  REQUEST_FINISH_STATUS,
} from 'redux/actions/actionTypes';

export const requestStatusReducer = (
  state = {
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_LOADING_STATUS:
      return {
        ...state,
        ...action.payload,
      };
    case REQUEST_FINISH_STATUS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
