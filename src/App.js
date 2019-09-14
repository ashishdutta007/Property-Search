import React from 'react';
import { Provider } from 'react-redux';
import logo from './assets/logo.svg';
import './App.css';
import store from './store/store';
import ListingPage from './containers/ListingPageContainer';
import PropertyFilters from './containers/PropertyFilters';

import 'rc-slider/assets/index.css';

// Provider is react HOC used to pass redux store to the APP
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <PropertyFilters />
        </header>
        <ListingPage />
      </div>
    </Provider>
  );
}

export default App;
