import React from 'react';
import s from './ResetPassword.module.scss';

import Header from '../../components/Header/Header';
import {FormInput, FormContainer, Input} from '../../components/Form';
import {isEmail} from '../../Tools/Errors/handleErrors';
import Button from '../../components/Button/Button';
import Alert from '../../components/Alert/Alert';

function ResetPasswordView({
  handleRestorePassword,
  setInitialValue,
  initialValue,
  isLoading,
  error,
  disabledBtn
}) {
  return (
    <React.Fragment>
      <Header theme="light"/>
      <div className="center" style={{
        flexDirection: "column"
      }}>
        <FormContainer initialValue={initialValue} setInitialValue={setInitialValue}>
          <div className={`${s.blockLogin} panel`}>
            <span className={`${s.reset} center`}>Restore Password</span>
            {error && (
              <Alert message={error.message}/>
            )}

            <FormInput
              name="email"
              label="Email"
              validate={isEmail}
              type="email"
              style={{
              height: "58px"
            }}
              placeholder="Example@gmail.com">
              <Input/>
            </FormInput>

            <Button
              text="Continue"
              isLoading={isLoading}
              disabledBtn={disabledBtn}
              style={{
              height: '58px',
              marginTop: '24px'
            }}
              onClick={handleRestorePassword}/>
          </div>
        </FormContainer>
      </div>
    </React.Fragment>
  );
};

export default ResetPasswordView;
