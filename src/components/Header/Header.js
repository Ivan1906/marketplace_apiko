import React from 'react';
import {Link} from 'react-router-dom';
import logoLight from './Logo_light.svg';
import logoDark from './Logo_dark.svg';
import heartLight from './Heart_light.svg';
import heartDark from './Heart_dark.svg';
import s from './Header.module.scss';
import Api from '../../api/index';
import Avatar from '../Avatar/AvatarContainer';
import {routes} from './../../scenes/router';

function Header({theme, children}) {
  let heightHeader = theme === 'light'
    ? 'light'
    : children
      ? 'darkThemeWithChildren'
      : 'darkThemeWithoutChildren';

  const styleAvatar = {
    width: "40px",
    height: "40px",
    fontSize: "14px",
    background: "red",
    marginLeft: "38px",
    cursor: "pointer"
  };

  return (
    <React.Fragment>
      <div className={`${s.wrapper} ${heightHeader}`}>
        <div className={s.container}>
          <div className="columnOne">
            <Link to={routes.home}><img
              className={s.logo}
              src={theme === 'light'
      ? logoLight
      : logoDark}
              alt="Apiko"/>
            </Link>
          </div>

          <div className={`${s.center} columnTwo`}>

            <div className={s.right}>
              <Link to={routes.addProduct}>
                <div className={`${s.btnShell} center`}>shell</div>
              </Link>
            </div>

            <div
              style={{
              marginTop: children
                ? '44px'
                : null
            }}>{children}</div>
          </div>

          <div className={`columnThree ${s.btnLogin}`}>
            {!Api.Auth.isLoggedIn
              ? <Avatar style={styleAvatar}/>
              : (
                <Link
                  to="/login"
                  style={{
                  color: theme === 'light'
                    ? '#2B2B2B'
                    : '#FFF'
                }}>
                  login
                </Link>
              )}

            <img
              className={s.heart}
              src={theme === 'light'
              ? heartLight
              : heartDark}
              alt="Heart"/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
