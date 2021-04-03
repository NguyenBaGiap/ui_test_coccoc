import { connect } from 'react-redux';
import HomePage from 'uies/pages/home/home';
import * as giftsAction from 'redux/actions/giftsAction';

const mapStateToProps = (state) => ({
  initialValues: state.giftsReducer.initialValuesForm,
  gifts: state.giftsReducer.gifts,
  giftPageList: state.giftsReducer.giftPageList,
  giftsIndex: state.giftsReducer.giftsIndex,
  totalPageGift: state.giftsReducer.totalPageGift,
  totalGift: state.giftsReducer.totalGift,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGifts: async (params) => {
    await dispatch(giftsAction.fetchGiftsRequest(params));
  },
  handleChangePage: async (pageIndex) => {
    await dispatch(giftsAction.onChangePageGifts(pageIndex));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
