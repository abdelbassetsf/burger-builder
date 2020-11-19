import { createStore, applyMiddleware, compose } from 'redux';
import burgerBuilderReducer from '../reducers/burger-builder';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  burgerBuilderReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
