// https://github.com/marylorian/react_0607
// https://github.com/marylorian/react_1405

import React from 'react';
import './App.css';
import RoutesUser from './RoutesUser';
import { useState } from 'react';
import { Provider } from "react-redux";
import {store, persistor} from "./store/index";
import { PersistGate } from "redux-persist/es/integration/react";

function App() {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <div className="App">
            <div className='App-body'>
                <RoutesUser/>
              </div>
            </div>
          </PersistGate>
        </Provider>
      );
}

export default App;