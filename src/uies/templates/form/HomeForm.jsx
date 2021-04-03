import React from 'react';
import { Field, reduxForm } from 'redux-form';
import SimpleField from 'uies/atoms/simpleField';

const validate = (values) => {
  const errors = {};
  return errors;
};

const HomeForm = (props) => {
  const {
    totalGift,
    findAll,
    findByVoucher,
    findByCardMobile,
    findByGift,
    sortOptions,
  } = props;
  return (
    <React.Fragment>
      <div className={'d-none d-md-block'}>
        <form className={'template-home-form'}>
          <div className={'field-checked'}>
            <Field
              name="all"
              type="checkbox"
              component={SimpleField}
              onChange={findAll}
              label={`Tất cả (${totalGift})`}
            />
            <Field
              name="voucher"
              type="checkbox"
              component={SimpleField}
              onChange={findByVoucher}
              label="Voucher khuyến mại"
            />
            <Field
              name="cardMobile"
              type="checkbox"
              component={SimpleField}
              onChange={findByCardMobile}
              label="Thẻ điện thoại"
            />
            <Field
              name="gift"
              type="checkbox"
              component={SimpleField}
              onChange={findByGift}
              label="Quà tặng"
            />
          </div>
          <div className={'field-selected'}>
            <Field name="sortBy" component="select" className="form-select">
              {sortOptions.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </Field>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default reduxForm({
  form: 'homeForm',
  enableReinitialize: true,
  validate,
})(HomeForm);
