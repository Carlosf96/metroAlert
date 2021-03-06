import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initialState={};
const middleware = [thunk];
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore( 
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )	
);

export default store;