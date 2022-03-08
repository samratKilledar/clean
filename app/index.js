import React from 'react';
import { Provider } from "react-redux";
import store from "./application/config/store";
import Navigator from './application/config/route.js';



//console.disableYellowBox = true



export default () => (
    <Provider store={store}>
      <Navigator />
    </Provider>
)