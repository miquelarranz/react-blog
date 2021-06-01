import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from '../App';
import { fakeStore, renderStoreHelper } from '../../../__tests__/__mocks__/renderStoreHelper';

describe('App', () => {
    it('renders a App component', () => {
        renderStoreHelper({
            component: <App />,
            rootState: fakeStore(),
        });

        const text = screen.getByText('This is some random text');

        expect(text).toBeInTheDocument();
    });
});
