import * as React from 'react';
import 'helpers/filedStyle.css';
import classNames from 'classnames';

const SimpleField = (props) => {
  const {
    input,
    label,
    type,
    meta: { touched, error, warning },
  } = props;
  return (
    <React.Fragment>
      <div className={'field-container'}>
        <div className={'field-value'}>
          <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
        <label className={classNames('field-label')}>{label}</label>
      </div>
    </React.Fragment>
  );
};

export default SimpleField;
