import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [reduxThunk];

export const configureStore = () => {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
};
