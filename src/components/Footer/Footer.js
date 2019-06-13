import React from 'react';
import s from './Footer.module.scss';

function Footer() {
  return (
    <React.Fragment>
      <div className={s.wrapper}>
        <div className={s.line} />
        <div className={`${s.container} center`}>
          <div className={s.text}>
            Copyright © 2017. Privacy Policy.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
