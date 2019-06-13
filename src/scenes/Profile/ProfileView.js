import React from 'react';
import s from './Profile.module.scss';
import Header from './../../components/Header/Header';
import Search from './../../components/Search/Search';
import Product from '../../components/Product/Product';
import Api from '../../api';

function ProfileView({products, isLoading, handleClickProduct}) {
  products = Api.listProducts;

  return (
    <React.Fragment>
      <Header theme="dark">
        <Search/>
      </Header>
      <div className={s.container}>
        <div className="columnTwo offsetColumnOne">
          <div className={s.paramsPanel}></div>
          <div className={s.listProducts}>
            {isLoading && (
              <div>Loading ...</div>
            )}
            {!isLoading && products
              .slice(0, 12)
              .map(product => <Product key={product.id} product={product} onClick={handleClickProduct}/>)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileView;