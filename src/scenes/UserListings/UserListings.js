import React from 'react';
import Header from '../../components/Header/Header';
import Search from './../../components/Search/Search';

function UserListings() {
  return (
    <React.Fragment>
      <Header theme="dark">
        <Search />
      </Header>
      <div>UserListings</div>
    </React.Fragment>
  );
}

export default UserListings;
