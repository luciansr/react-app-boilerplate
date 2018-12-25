import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import AppRouter from './routing/AppRouter';

import store from './redux/store';

import HttpInterceptor from './config/httpInterceptor';

class App extends Component {
  componentWillMount() {
    HttpInterceptor.setupInterceptors(store);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <AppRouter></AppRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
