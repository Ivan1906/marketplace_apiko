import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Api from '../api';
import PrivateRoute from '../Tools/PrivateRoute/PrivateRoute';

import LoginContainer from './Login/LoginContainer';
import RegisterContainer from './Register/RegisterContainer';
import ProfileContainer from './Profile/ProfileContainer';
//import AddProductContainer from './AddProduct/AddProductContainer';
import ProductDetailContainer from './ProductDetail/ProductDetailContainer';
//import LatestListContainer from './LatestList/LatestListContainer';
import ResetPasswordContainer from './ResetPassword/ResetPasswordContainer';
import Listing from './Listing/Listing';
import UserListings from './UserListings/UserListings';
import Inbox from './Inbox/Inbox';
import ModalSwitch from '../components/Modal/ModalSwitch/ModalSwitch';

export const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  resetPassword: '/resetPassword',
  addProduct: '/products/new',
  productDetail: '/product/:id',
  productMessage: '/chat/:productId',
  userListsings: '/users/:id',
  listingsById: '/listings/:id',
  profile: '/profile',
  editProfile: '/profile/:id',
  logout: '/logout',
  bookmarks: '/bookmarks',
  privacy: '/privacy',
  inbox: '/inbox',
  terms: '/terms',
  search: '/search',
  productCreateChat: '/products/:id/createChat'
};

function NotFound() {
  return <div>404 Not Found</div>;
}

export default function Router() {
  return (
    <React.Fragment>
      <Switch>
        {!Api.Auth.isLoggedIn
          ? (<Route path={routes.login} component={LoginContainer}/>)
          : null}

        <Route path={routes.register} component={RegisterContainer}/>
        <Route path={routes.resetPassword} component={ResetPasswordContainer}/>
        <Route path={routes.profile} component={ProfileContainer}/>
        <PrivateRoute path={routes.editProfile} component={ProfileContainer}/>
        <Route path={routes.productDetail} component={ProductDetailContainer}/>
        <Route path={routes.listingsById} component={Listing}/>
        <Route path={routes.userListsings} component={UserListings}/>
        <Route path={routes.userListsings} component={UserListings}/>
        <PrivateRoute path={routes.privacy} component={Inbox}/>
        <PrivateRoute path={routes.inbox} component={Inbox}/>
        <Route component={ModalSwitch}/>
        <Route component={NotFound}/>
      </Switch>
    </React.Fragment>
  );
}
