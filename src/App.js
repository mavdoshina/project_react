import React from 'react';
import './App.css';
import RoutesUser from './RoutesUser';
import { useState } from 'react';
import { Provider } from "react-redux";

function App() {
      return (
        <Provider store={store}>
        <div className="App">
         <div className='App-body'>
            <RoutesUser/>
          </div>
        </div>
        </Provider>
      );
}

export default App;