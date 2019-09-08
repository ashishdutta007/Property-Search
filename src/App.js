import React from 'react';
import { Provider } from 'react-redux';
import logo from './assets/logo.svg';
import './App.css';
import store from './store/store';


// Provider is react HOC used to pass redux store to the APP

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Provider>
  );
}

export default App;
