import React from 'react';
import {Link} from 'react-router-dom';
import s from './Avatar.module.scss';
import { routes } from '../../scenes/router';
import { logout } from '../../modules/auth/authOperations';

function getCharFullName(fullName) {
  let chars = '';
  fullName
    .split(' ')
    .forEach(element => chars = chars + element.charAt(0).toUpperCase());
  return chars;
};

function show(evt) {
  let show = evt.target.dataset ? evt.target.dataset.show : 'none';
  const dropdown = document.getElementById("dropdownContent");
  
  if (show !== 'none') {
    if (show === 'true') {
      evt.target.setAttribute('data-show', "false");
      dropdown.style.display = 'none'
    } else {
      evt.target.setAttribute('data-show', "true");
      dropdown.style.display = 'block'
    }
  }
};

function handleLogout() {
  logout();
  window.location = routes.login;
}

const styleAvatar = {
  width: "40px",
  height: "40px",
  fontSize: "14px",
  background: "red",
  cursor: "pointer"
};

function AvatarView({style, user, owner}) {
  let shortName = '';
  if (owner) {
    shortName = getCharFullName(owner.fullName);
  } else if (!owner && user) {
    shortName = getCharFullName(user.fullName);
  }

  return (
    <div className={s.dropdown}>
      <div className={s.circle} style={style} data-show="false" onClick={show}>{shortName}</div>
      <div className={s.dropdownContent} id="dropdownContent">
        <div className={s.header}>
          <div className={s.content}>
            <div className={`${s.circle}`} style={styleAvatar}>{shortName}</div>
            <div className={s.rightContent}>
              <span className={s.name}>Yanik Ivan</span>
              <span className={s.email}>admin@ukr.net</span>
              <span className={s.profile}><Link to={routes.profile}>profile</Link></span>
            </div>
          </div>
          <div className={s.editProfile}><Link to={routes.editProfile}>edit profile</Link></div>
        </div>
        <hr/>
        <div className={s.bottom}><a onClick={handleLogout}>logout</a></div>
      </div>
    </div>
  );
};

export default AvatarView;