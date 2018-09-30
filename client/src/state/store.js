// @flow
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
  toastr: reducer
});

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose) || compose;

export const configureStore = () =>
  createStore(rootReducer, undefined, composeEnhancers(applyMiddleware()));
