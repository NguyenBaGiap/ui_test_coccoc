import * as React from 'react';
import HomeForm from 'uies/templates/form/HomeForm';
import { CARD_ACTION_LABEL, HOME_SORT_BY } from 'utilities/Constants';
import filterForm from 'static/images/filter-form-mobile.svg';
import CardItem from 'uies/molecules/cardItem';
import BasicPagination from 'uies/organisms/basicPagination';
import SimpleSpinner from 'uies/atoms/simpleSpinner';

class GiftList extends React.Component {
  render() {
    const {
      totalGift,
      initialValues,
      formValues,
      giftPageList,
      handleChangePage,
      giftsIndex,
      totalPageGift,
      handleRedeemGift,
      isLoadingGifts,
    } = this.props;
    if (isLoadingGifts) {
      return (
        <div className={'container p-5 home-spinner'}>
          <SimpleSpinner />
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className={'home-form'}>
          <div className={'container'}>
            <div className="d-none d-md-block">
              <HomeForm
                totalGift={totalGift}
                initialValues={initialValues}
                formValues={formValues}
                sortOptions={HOME_SORT_BY}
              />
            </div>
            <div className="d-block d-md-none pt-3 pb-3 form-mobile">
              <a href={'#'}>
                <img className={'pr-1'} src={filterForm} alt={'filter'} />
                Lọc
              </a>
            </div>
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
                    cardAction={handleRedeemGift}
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
      </React.Fragment>
    );
  }
}

export default GiftList;
