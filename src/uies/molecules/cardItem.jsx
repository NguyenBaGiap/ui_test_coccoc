import * as React from 'react';
import point from 'static/images/point.svg';

const CardItem = (props) => {
  const {
    cardData: { img, alt, cardTitle, cardSubtitle, cardLabelBtn, cardText },
    cardAction,
  } = props;
  return (
    <div className="card card-custom">
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{cardSubtitle}</h6>
        <p className={'card-text'}>
          {cardText} <img src={point} alt={alt} />
        </p>
        <button
          className={'btn card-action'}
          onClick={cardAction(props.cardData)}
        >
          {cardLabelBtn}
        </button>
      </div>
    </div>
  );
};

export default CardItem;
