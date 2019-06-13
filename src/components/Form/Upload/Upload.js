import React from 'react';
import s from './Upload.module.scss';

function openUpload() {
  let upload = document.getElementById('uploadImageProduct');
  upload.click();
}

function Upload({
  name,
  formState,
  onChange,
  setError,
  getError,
  validate,
  style
}) {
  function handleChange(files) {
    let value = [];
    Object
      .keys(files)
      .forEach(key => {
        value.push(files[key]);
      });
    value = value.slice(0, 6);
    if (validate) {
      //setError(name, validate(value, name));
    }

    onChange(name, value);
  };

  const error = getError(name);

  return (
    <React.Fragment>
      <div className={s.borderInput} style={style}>

        <input
          className={s.showed}
          id="uploadImageProduct"
          type="file"
          multiple="multiple"
          onChange={(evt) => handleChange(evt.target.files)}/>

        <div className={`${s.square} center`} onClick={openUpload}>
          <div className={s.horizontally}></div>
          <div className={s.vertical}></div>
        </div>
      </div>
      {error && (
        <span className="error">{error}</span>
      )}
    </React.Fragment>
  );
};

export default Upload;

//value={formState[name]}