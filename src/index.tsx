import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import { configureStore } from './helpers/storeHelper';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
