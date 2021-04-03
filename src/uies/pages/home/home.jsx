import React from 'react';
import logo from 'static/images/logo.svg';
import HomeForm from 'uies/templates/form/HomeForm';
import CardItem from 'uies/molecules/cardItem';
import { HOME_SORT_BY, CARD_ACTION_LABEL } from 'utilities/Constants';
import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await this.props.fetchGifts(null);
  }

  handleChangeTab = () => {
    console.log('change tabs');
  };

  handleRedeemGift = (gift) => () => {
    console.log(gift);
  };

  render() {
    const { initialValues, gifts } = this.props;
    return (
      <React.Fragment>
        <div className={'home-header'}>
          <div className={'container header-container'}>
            <div className={'header-logo'}>
              <a href={'/'}>
                <img src={logo} alt={'logo'} />
              </a>
            </div>
            <div className={'d-none d-md-block'}>
              <ul className={'nav-ul'}>
                <li className={'nav-li'}>
                  <button className={'nav-a'}>Nhận quà tặng </button>
                </li>
                <li className={'nav-li'}>
                  <button className={'nav-a'}>Nhận điểm thưởng </button>
                </li>
                <li className={'nav-li'}>
                  <button className={'nav-a'}>Xếp hạng </button>
                </li>
                <li className={'nav-li'}>
                  <button className={'nav-a'}>Câu hỏi thường gặp </button>
                </li>
                <li className={'nav-li'}>
                  <button className={'nav-a'}>Login</button>
                </li>
              </ul>
            </div>
            <div className={'d-block d-md-none'}></div>
          </div>
        </div>
        <div className={'home-tabs'}>
          <div className={'container tabs-container'}>
            <div className={'title'}>Nhận quà tặng</div>
            <div className={'tabs'}>
              <button onClick={this.handleChangeTab} className={'tab'}>
                Đổi quà tặng
              </button>
              <button onClick={this.handleChangeTab} className={'tab'}>
                Vòng quay may mắn
              </button>
            </div>
          </div>
        </div>
        <div className={'home-form'}>
          <div className={'container'}>
            <div className="d-none d-md-block">
              <HomeForm
                initialValues={initialValues}
                sortOptions={HOME_SORT_BY}
              />
            </div>
            <div className="d-block d-md-none"></div>
            <div className={'divide-line'} />
          </div>
        </div>
        <div className={'home-card-list'}>
          <div className={'container'}>
            <div className={'row'}>
              {gifts.map((gift, index) => (
                <div
                  key={index}
                  className={'col-d-12 col-xs-12 col-md-3 col-lg-3 pb-4'}
                >
                  <CardItem
                    cardData={{
                      ...gift,
                      img: gift.imageUrl,
                      alt: gift.imageUrl,
                      cardTitle: gift.name,
                      cardSubtitle: gift.subTitle,
                      cardText: gift.requiredPoints,
                      cardLabelBtn: CARD_ACTION_LABEL,
                    }}
                    cardAction={this.handleRedeemGift}
                  />
                </div>
              ))}
            </div>
            <div className={'pagination'}></div>
          </div>
        </div>
        <div className={'home-footer'}></div>
      </React.Fragment>
    );
  }
}

export default Home;
