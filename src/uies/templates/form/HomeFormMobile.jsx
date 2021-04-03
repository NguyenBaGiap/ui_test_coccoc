import React from 'react';
import { Field, reduxForm } from 'redux-form';

const HomeFormMobile = (props) => {
  const { handleSubmit } = props;
  return (
    <React.Fragment>
      <div className={'d-none d-md-block'}>
        <form onSubmit={handleSubmit}>
          <div className={'filed-checked'}>
            <div className={'field-container'}>
              <label className={'field-label'} htmlFor="employed">
                Employed
              </label>
              <div className={'field-value'}>
                <Field
                  name="employed"
                  id="employed"
                  component="input"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
          <div className={'field-selected'}></div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default HomeFormMobile;
