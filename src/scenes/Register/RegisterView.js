import React from 'react';
import {Link} from 'react-router-dom';
import s from './Register.module.scss';

import Header from '../../components/Header/Header';
import {FormInput, Input, FormContainer} from './../../components/Form';
import password from '../../img/password.svg';
import Button from './../../components/Button/Button';
import {isEmail, required} from '../../Tools/Errors/handleErrors';
import Alert from '../../components/Alert/Alert';

function RegisterView({
  initialValue,
  setInitialValue,
  handleRegister,
  disabledBtn,
  isLoading,
  errorMessage
}) {
  return (
    <React.Fragment>
      <Header theme="light"/>
      <div className="center" style={{
        flexDirection: "column"
      }}>
        <FormContainer initialValue={initialValue} setInitialValue={setInitialValue}>
          <div className={`${s.blockRegister} panel`}>
            <span className={`${s.register} center`}>Register</span>
            {errorMessage && (
              <Alert message={errorMessage.message}/>
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

            <FormInput
              name="fullName"
              label="Full name"
              validate={required}
              style={{
              height: "58px"
            }}
              placeholder="Tony Stark">
              <Input/>
            </FormInput>

            <FormInput
              name="password"
              label="Password"
              type="password"
              validate={required}
              style={{
              height: "58px"
            }}
              img={password}
              posImg="right">
              <Input/>
            </FormInput>

            <FormInput
              name="confirmPassword"
              label="Password again"
              validate={required}
              style={{
              height: "58px"
            }}
              img={password}
              posImg="right">
              <Input type="password"/>
            </FormInput>

            <Button
              text="Register"
              disabledBtn={disabledBtn}
              isLoading={isLoading}
              style={{
              height: '58px',
              marginTop: '32px'
            }}
              onClick={handleRegister}/>
          </div>
        </FormContainer>

        <div className={`${s.loginNow} panel center`}>
          <span>I already have an account,&nbsp;
            <Link to="/login">log in</Link>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RegisterView;
