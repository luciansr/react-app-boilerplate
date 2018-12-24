import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import AppRouter from './routing/AppRouter';

import store from './redux/store';

class App extends Component {
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
