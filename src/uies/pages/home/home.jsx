import React from 'react';
import logo from 'static/images/logo.svg';
import social1 from 'static/images/social-1.svg';
import social2 from 'static/images/social-2.svg';
import social3 from 'static/images/social-3.svg';
import social4 from 'static/images/social-4.svg';
import social5 from 'static/images/social-5.svg';
import HomeForm from 'uies/templates/form/HomeForm';
import CardItem from 'uies/molecules/cardItem';
import { HOME_SORT_BY, CARD_ACTION_LABEL } from 'utilities/Constants';
import BasicPagination from 'uies/organisms/basicPagination';
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
    const {
      initialValues,
      totalGift,
      giftPageList,
      giftsIndex,
      totalPageGift,
      handleChangePage,
    } = this.props;
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
                  <button className={'nav-a'}>Đăng nhập</button>
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
                totalGift={totalGift}
                initialValues={initialValues}
                sortOptions={HOME_SORT_BY}
              />
            </div>
            <div className="d-block d-md-none"></div>
            <div className={'divide-line'} />
          </div>
        </div>
        <div className={'home-card-list'}>
          <div className={'container card-list-container'}>
            <div className={'row'}>
              {giftPageList.map((gift, index) => (
                <div
                  key={index}
                  className={'col-d-12 col-xs-12 col-md-3 col-lg-3 pb-5'}
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
            <div className={'pagination'}>
              <BasicPagination
                handleChangePage={handleChangePage}
                pageIndex={giftsIndex}
                totalPages={totalPageGift}
              />
            </div>
          </div>
        </div>
        <div className={'home-footer'}>
          <div className={'container d-none d-md-block pt-4 pb-4'}>
            <div className={'footer-linked'}>
              <div className={'linked-logo'}>
                <a href={'#'}>
                  <img src={logo} />
                </a>
              </div>
              <div className={'linked-social'}>
                <ul className={'social-ul'}>
                  <li>
                    <a href={'#'}>
                      <img src={social1} />
                    </a>
                  </li>
                  <li>
                    <a href={'#'}>
                      <img src={social2} />
                    </a>
                  </li>
                  <li>
                    <a href={'#'}>
                      <img src={social3} />
                    </a>
                  </li>
                  <li>
                    <a href={'#'}>
                      <img src={social4} />
                    </a>
                  </li>
                  <li>
                    <a href={'#'}>
                      <img src={social5} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={'divide-line-footer'} />
            <div className={'footer-copyright pt-3'}>
              <div className={'copyright-left'}>
                © 2021. Bản quyền thuộc về Công ty TNHH Cốc Cốc.
              </div>
              <div className={'copyright-right'}>
                <a href={'#'}>Điều khoản sử dụng</a>
                <a href={'#'}>Chính sách bảo mật</a>
              </div>
            </div>
          </div>

          <div className={'container p-3 d-block d-md-none mobile-custom'}>
            <div className={'linked-logo-mobile pb-3'}>
              <a href={'#'}>
                <img src={logo} />
              </a>
            </div>
            <div className={'copyright-mobile'}>
              <a href={'#'}>Điều khoản sử dụng</a>
              <a href={'#'}>Chính sách bảo mật</a>
            </div>
            <div className={'linked-social-mobile pt-2'}>
              <ul className={'social-ul-mobile'}>
                <li>
                  <a href={'#'}>
                    <img src={social1} alt={'fb'} />
                  </a>
                </li>
                <li>
                  <a href={'#'}>
                    <img src={social2} alt={'fb'} />
                  </a>
                </li>
                <li>
                  <a href={'#'}>
                    <img src={social3} alt={'fb'} />
                  </a>
                </li>
                <li>
                  <a href={'#'}>
                    <img src={social4} alt={'fb'} />
                  </a>
                </li>
                <li>
                  <a href={'#'}>
                    <img src={social5} alt={'fb'} />
                  </a>
                </li>
              </ul>
            </div>
            <div className={'divide-line-footer'} />
            <div className={'copyright-content-mobile'}>
              © 2021. Bản quyền thuộc về Công ty TNHH Cốc Cốc.
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
