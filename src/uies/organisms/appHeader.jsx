import React from 'react';
import logo from 'static/images/logo.svg';
import point from 'static/images/point.svg';
import avatar from 'static/images/user.svg';
import menuMobile from 'static/images/menu-mobile.svg';
import classNames from 'classnames';
import { MENU_BAR } from 'utilities/Constants';

export default class AppHeader extends React.Component {
  render() {
    const { navigateTo, session, pathName } = this.props;
    return (
      <React.Fragment>
        <div className={'header-logo'}>
          <a href={'#'}>
            <img src={logo} alt={'logo'} />
          </a>
        </div>
        <div className={'d-none d-md-block'}>
          <ul className={'nav-ul'}>
            {MENU_BAR.map((item, index) => {
              if (item.pathName === '/login' && session !== undefined) {
                return (
                  <li key={index} className={'nav-li'}>
                    <button className={classNames('nav-a', 'user-info')}>
                      <img className={'pr-1'} src={avatar} />
                      <span className={'pr-1'}>
                        <span className={'font-weight-bold'}>Huy Thắng - </span>
                        <span className={'user-point'}>1.250</span>
                      </span>
                      <img src={point} />
                    </button>
                  </li>
                );
              }

              return (
                <li key={index} className={classNames('nav-li')}>
                  <button
                    onClick={navigateTo(item.pathName)}
                    className={classNames(
                      'nav-a',
                      pathName === item.pathName ? 'blue-active' : null
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={'d-block d-md-none pb-2'}>
          <a href={'#'}>
            <img src={menuMobile} />
          </a>
        </div>
      </React.Fragment>
    );
  }
}
