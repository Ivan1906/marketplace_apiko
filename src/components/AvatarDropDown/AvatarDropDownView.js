import React from 'react';
import {Link} from 'react-router-dom';
import s from './AvatarDropDown.module.scss';
import {routes} from '../../scenes/router';

function getCharFullName(fullName) {
  let chars = '';
  fullName
    .split(' ')
    .forEach(element => chars = chars + element.charAt(0).toUpperCase());
  return chars;
};

const styleAvatar = {
  width: "40px",
  height: "40px",
  fontSize: "14px",
  background: "red",
  cursor: "pointer"
};

function AvatarDropDownView({style, user, handleShow, handleLogout}) {
  let shortName = '';
  if (user) {
    shortName = getCharFullName(user.fullName);
  }

  return (
    <div className={s.dropdown}>
      <div className={s.circle} style={style} data-show="false" onClick={handleShow}>{shortName}</div>
      <div className={s.dropdownContent} id="dropdownContent">
        <div className={s.header}>
          <div className={s.content}>
            <div className={`${s.circle}`} style={styleAvatar}>{shortName}</div>
            <div className={s.rightContent}>
              <span className={s.name}>{user
                  ? user.fullName
                  : ''}</span>
              <span className={s.email}>{user
                  ? user.email
                  : ''}</span>
              <span className={s.profile}>
                <Link to={routes.profile}>profile</Link>
              </span>
            </div>
          </div>
          <div className={s.editProfile}>
            <Link to={routes.editProfile}>edit profile</Link>
          </div>
        </div>
        <hr/>
        <div className={s.bottom}>
          <a onClick={handleLogout}>logout</a>
        </div>
      </div>
    </div>
  );
};

export default AvatarDropDownView;