import React from 'react';
import s from './Input.module.scss';

function Input({
  type = 'text',
  name,
  formState,
  onChange,
  setError,
  getError,
  validate,
  placeholder,
  style,
  img,
  posImg,
  multiple
}) {
  function handleChange(value) {
    if (validate) {
      setError(name, validate(value, name));
    }
    onChange(name, value);
  };

  const error = getError(name);

  return (
    <React.Fragment>
      <div
        className={`${s.borderInput} center ${posImg === 'left'
        ? s.rowReverse
        : s.row}`}
        style={style}>

        <input
          type={type}
          placeholder={placeholder}
          value={formState[name]}
          multiple={multiple}
          onChange={(evt) => handleChange(evt.target.value)}/> {img && <img src={img} alt="icon"/>}
      </div>
      {error && (
        <span className="error">{error}</span>
      )}
    </React.Fragment>
  );
};

export default Input;