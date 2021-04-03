import React from 'react';
import logo from 'static/images/logo.svg';
import social1 from 'static/images/social-1.svg';
import social2 from 'static/images/social-2.svg';
import social3 from 'static/images/social-3.svg';
import social4 from 'static/images/social-4.svg';
import social5 from 'static/images/social-5.svg';

export default class AppFooter extends React.Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
