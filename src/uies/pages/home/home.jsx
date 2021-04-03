import React from 'react';

import { TAB_LIST } from 'utilities/Constants';
import AppHeader from 'redux/containers/organisms/appHeader';
import AppFooter from 'uies/organisms/appFooter';
import GiftList from 'uies/templates/home/giftList';
import SimpleTab from 'uies/molecules/simpleTab';
import classNames from 'classnames';
import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: 'redeemGifts',
    };
  }
  async componentDidMount() {
    await this.props.fetchGifts(null);
  }

  handleChangeTab = (value) => () => {
    this.setState({ tabActive: value });
  };

  handleRedeemGift = (gift) => () => {
    console.log(gift);
  };

  render() {
    const {
      initialValues,
      totalGift,
      giftPageList,
      giftsIndex,
      totalPageGift,
      handleChangePage,
      formValues,
      isLoadingGifts,
    } = this.props;

    const { tabActive } = this.state;
    return (
      <React.Fragment>
        <div className={'home-header'}>
          <div className={'container header-container'}>
            <AppHeader />
          </div>
        </div>
        <div className={'home-tabs'}>
          <div className={'container tabs-container'}>
            <div className={'title'}>Nhận quà tặng</div>
            <div className={'tabs'}>
              {TAB_LIST.map((tab, index) => {
                return (
                  <SimpleTab
                    key={index}
                    tab={tab}
                    tabActive={tabActive}
                    handleChangeTab={this.handleChangeTab}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {tabActive === 'redeemGifts' && (
          <GiftList
            totalGift={totalGift}
            initialValues={initialValues}
            formValues={formValues}
            giftPageList={giftPageList}
            handleChangePage={handleChangePage}
            giftsIndex={giftsIndex}
            totalPageGift={totalPageGift}
            handleRedeemGift={this.handleRedeemGift}
            isLoadingGifts={isLoadingGifts}
          />
        )}
        {tabActive === 'luckCircle' && (
          <div className={classNames('container', 'luck-circle', 'p-5')}>
            {' '}
            Tính năng chưa có design
          </div>
        )}

        <div className={'home-footer'}>
          <AppFooter />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
