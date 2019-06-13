import React from 'react';
import s from './Modal.module.scss';

function ModalView() {
  return (
    <React.Fragment>
      <div className={s.bgModal}>
        <div className={s.modalContainer}>Modal</div>
      </div>
    </React.Fragment>
  );
};

export default ModalView;