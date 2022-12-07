// https://github.com/marylorian/react_0607
// https://github.com/marylorian/react_1405

import React from 'react';
import './App.css';
import RoutesUser from './RoutesUser';
import { useState } from 'react';
import { Provider } from "react-redux";
import {store} from "./store/index";

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