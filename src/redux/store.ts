import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));  

export default store;