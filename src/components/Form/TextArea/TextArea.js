import React from 'react';
import s from './TextArea.module.scss';

function TextArea({
  name,
  formState,
  onChange,
  setError,
  getError,
  validate,
  placeholder,
  style,
  img,
  posImg
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
      <div className={`${s.borderInput} center`} style={style}>
        <textarea
          placeholder={placeholder}
          value={formState[name]}
          onChange={(evt) => handleChange(evt.target.value)}></textarea>
      </div>
      {error && (
        <span className="error">{error}</span>
      )}
    </React.Fragment>
  );
};

export default TextArea;