import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {routes} from '../../../scenes/router';
import AddProductContainer from '../../../scenes/AddProduct/AddProductContainer';
import AddModalProductContainer from '../../../scenes/AddProduct/AddModalProduct/AddModalProductContainer';
import LatestListContainer from '../../../scenes/LatestList/LatestListContainer';

class ModalSwitch extends Component {

  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let {location} = this.props;

    if (nextProps.history.action !== "POP" && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  };

  render() {
    let {location} = this.props;

    let isModal = !!(location.state && location.state.modal && this.previousLocation !== location);
    console.log(isModal)
    console.log(this.previousLocation)
    console.log(location)
    return (
      <React.Fragment>
        <Switch
          location={isModal
          ? this.previousLocation
          : location}>
          <Route exact path={routes.home} component={LatestListContainer}/>
          <Route path={routes.addProduct} component={AddProductContainer}/>
        </Switch>
        {isModal
          ? (<Route path={routes.addProduct} component={AddModalProductContainer}/>)
          : null}
      </React.Fragment>
    );
  };
};

export default ModalSwitch;