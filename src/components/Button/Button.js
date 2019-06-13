import React from 'react';
import s from './Button.module.scss';

function Button({text, style, onClick, isLoading, disabledBtn}) {
  return (
    <div
      className={`${s.brdButtom} center ${disabledBtn === undefined
      ? 'disabledBtn'
      : disabledBtn
        ? null
        : 'disabledBtn'}`}
      style={style}
      onClick={onClick}>
      <span className={s.text}>{isLoading
          ? "Loading ..."
          : text}</span>
    </div>
  );
};

export default Button;