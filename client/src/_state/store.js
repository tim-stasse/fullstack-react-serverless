import { reducer } from 'react-redux-toastr';
import { configureStore } from 'redux-starter-kit';

export const createStore = () =>
  configureStore({
    reducer: {
      toastr: reducer
    }
  });
