import { connect } from 'react-redux';
import HomePage from 'uies/pages/home/home';
import * as giftsAction from 'redux/actions/giftsAction';

const mapStateToProps = (state) => ({
  initialValues: state.giftsReducer.initialValuesForm,
  gifts: state.giftsReducer.gifts,
  giftsIndex: 1,
  totalGifts: state.giftsReducer.totalGifts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGifts: async (params) => {
    await dispatch(giftsAction.fetchGiftsRequest(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
