import React from 'react';
import s from './Avatar.module.scss';

function getCharFullName(fullName) {
  let chars = '';
  fullName
    .split(' ')
    .forEach(element => chars = chars + element.charAt(0).toUpperCase());
  return chars;
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
      <div className={s.circle} style={style}>{shortName}</div>
    </div>
  );
};

export default AvatarView;