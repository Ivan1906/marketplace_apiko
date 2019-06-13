import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import {appOperations} from './modules/app';
import Router from './scenes/router';
import Footer from './components/Footer/Footer';
import store from './store/createStore';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    props.dispatch(appOperations.init());
  }

  render() {
    if (this.props.isLoading) {
      return <div>...Loading</div>
    }
    return (
      <BrowserRouter>
        <Router/>
        <Footer/>
      </BrowserRouter>
    );
  }
};

store.subscribe(() => {
  console.info('State: ', {
    state: store.getState()
  });
});

const mapStateToProps = (state) => ({isLoading: state.app.isLoading});

const AppConnected = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}><AppConnected/></Provider>, document.getElementById('root'));