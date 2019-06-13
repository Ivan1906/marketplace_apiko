import React from 'react';
import s from './FormInput.module.scss';

import {FormContext} from '../FormContainer/FormContainer';

function FormInput(props) {
  let {label, name} = props;
  return (
    <FormContext.Consumer>
      {(value) => {
        props = {
          ...props,
          ...value
        };

        return (
          <div className={s.formGroup}>
            <label htmlFor={name}>{label}</label>
            {props.children && React.cloneElement(props.children, {
              ...props
            })}
          </div>
        )
      }}
    </FormContext.Consumer>
  )
};

export default FormInput;