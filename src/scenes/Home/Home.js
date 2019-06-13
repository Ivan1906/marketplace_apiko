import React from 'react';
import Header from '../../components/Header/Header';
import Search from './../../components/Search/Search';
import s from './Home.module.scss';

function Home() {
  return (
    <React.Fragment>
      <Header theme="dark">
        <Search/>
      </Header>
      <div className={s.container}>
        <div className={s.paramsPanel}></div>
      </div>
    </React.Fragment>
  );
}

export default Home;
