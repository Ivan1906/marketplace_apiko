import React from 'react';
import s from './Login.module.scss';
import {Link} from 'react-router-dom';

import Header from '../../components/Header/Header';
import {FormInput, FormContainer, Input} from '../../components/Form';
import {required, isEmail} from '../../Tools/Errors/handleErrors';
import Button from '../../components/Button/Button';
import password from '../../img/password.svg';
import {routes} from './../router';
import Alert from '../../components/Alert/Alert';

function Login({
  handleLogin,
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
            <span className={`${s.login} center`}>Login</span>
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

            <FormInput
              name="password"
              label="Password"
              validate={required}
              type="password"
              style={{
              height: "58px"
            }}
              img={password}
              posImg="right">
              <Input/>
            </FormInput>

            <div className={s.contentRight}>
              <span className={s.rememberPass}>
                <Link to={routes.resetPassword}>Don’t remember password?</Link>
              </span>
            </div>

            <Button
              text="Continue"
              isLoading={isLoading}
              disabledBtn={disabledBtn}
              style={{
              height: '58px'
            }}
              onClick={handleLogin}/>
          </div>
        </FormContainer>

        <div className={`${s.registerNow} panel center`}>
          <span>I have no account,&nbsp;
            <Link to="/register">register now</Link>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
