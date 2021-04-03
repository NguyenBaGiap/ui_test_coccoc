import { connect } from 'react-redux';
import HomePage from 'uies/pages/home/home';
import * as giftsAction from 'redux/actions/giftsAction';
import { formValueSelector } from 'redux-form';
import { HOME_FORM_FILTER } from 'utilities/Constants';

const formValues = formValueSelector(HOME_FORM_FILTER);

const mapStateToProps = (state) => ({
  initialValues: state.giftsReducer.initialValuesForm,
  gifts: state.giftsReducer.gifts,
  giftPageList: state.giftsReducer.giftPageList,
  giftsIndex: state.giftsReducer.giftsIndex,
  totalPageGift: state.giftsReducer.totalPageGift,
  totalGift: state.giftsReducer.totalGift,
  formValues: formValues(
    state,
    'all',
    'voucher',
    'cardMobile',
    'gift',
    'sortBy'
  ),
  isLoadingGifts: state.requestStatusReducer.isLoading,
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
