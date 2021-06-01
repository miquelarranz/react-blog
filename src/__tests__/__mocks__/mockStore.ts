import thunk from 'redux-thunk';
import { AppState } from '../../../src/store/index';
import configureStore, { MockStore } from 'redux-mock-store';

export const generateMockStore = (state: AppState | any): MockStore<AppState | {}, any> => {
    const mockStore = configureStore<AppState, any>([thunk]);
    const store = mockStore(state);

    store.clearActions();

    return store;
};
