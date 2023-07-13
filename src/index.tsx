import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import configStore from './redux/store';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Immutable from 'immutable';

const initState = Immutable.Map();
const store = configStore(initState)
ReactDOM.render(
      <Provider store={store}>
            <App />
      </Provider>,
      document.getElementById("root")
  );
