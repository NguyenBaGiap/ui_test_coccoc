import * as React from 'react';
import classNames from 'classnames';

const SimpleTab = (props) => {
  const { tab, tabActive, handleChangeTab } = props;
  return (
    <React.Fragment>
      <button
        onClick={handleChangeTab(tab.value)}
        className={classNames('tab', tabActive === tab.value && 'blue-active')}
      >
        <span
          className={classNames(tabActive !== tab.value && 'tab-suggest')}
        />
        {tab.label}
      </button>
    </React.Fragment>
  );
};

export default SimpleTab;
