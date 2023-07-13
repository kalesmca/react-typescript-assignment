import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';


// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));  

// export default store;

export default function configureStore(initState:any) {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;
    const store = createStore(
        rootReducer,
      initState,
      composeEnhancers(
        applyMiddleware(
            ReduxThunk,
        )
      )
    )
    
  
    return store
  }