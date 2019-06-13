import React from 'react';
import Header from '../../components/Header/Header';
import Search from './../../components/Search/Search';

function Listing() {
  return (
    <React.Fragment>
      <Header theme="dark">
        <Search />
      </Header>
      <div>Listing</div>
    </React.Fragment>
  );
}

export default Listing;
