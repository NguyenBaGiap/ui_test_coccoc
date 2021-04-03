import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { giftsReducer } from 'redux/reducers/giftsReducer';

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    giftsReducer,
  });
