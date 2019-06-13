import React from 'react';
import Modal from '../Modal/ModalContainer';
import {Route, Switch} from 'react-router-dom';
import {routes} from '../../../scenes/router';

function ModalSwitchView(props) {

  let {location, previousLocation} = props;
  console.log('ModalSwitchView', location, previousLocation)
  console.log('ModalSwitchView', previousLocation !== location)

  let isModal = !!(location.state && location.state.modal && previousLocation !== location);
  console.log('ModalSwitchView', isModal)

  return (
    <React.Fragment>
      <Switch location={isModal
        ? this.previousLocation
        : location}>
        <Route path={routes.productCreateChat} component={Modal}/>
      </Switch>
      {isModal
        ? (<Route path={routes.productCreateChat} component={Modal}/>)
        : null}
    </React.Fragment>
  );
};

export default ModalSwitchView;