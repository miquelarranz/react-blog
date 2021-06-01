import * as React from 'react';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { RenderOptions, render } from '@testing-library/react';
import { AppState } from '../../../src/store/index';

import ImagesReducer from '../../../src/store/Images/reducer';

export interface ITestUtilsPayload {
    component: any;
    rootState: AppState;
    renderOptions?: RenderOptions;
}

const rootReducer = combineReducers({
    images: ImagesReducer,
});

const configureStore = (rootState: AppState) => {
    const middlewares = [reduxThunk];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    return createStore(rootReducer, rootState, composeWithDevTools(middleWareEnhancer));
};

export const renderStoreHelper = ({ component, rootState, renderOptions }: ITestUtilsPayload) => {
    const wrapper = ({ children }: any) => {
        const store = configureStore(rootState);

        return <Provider store={store}>{children}</Provider>;
    };

    return render(component, { wrapper, ...renderOptions });
};

export const fakeStore = (): AppState => {
    return {
        images: { items: [{ source: 'test' }] },
    };
};
