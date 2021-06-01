import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Content } from '../Content';
import { fakeStore, renderStoreHelper } from '../../../__tests__/__mocks__/renderStoreHelper';

describe('Content', () => {
    it('renders a Content component', () => {
        renderStoreHelper({
            component: <Content />,
            rootState: fakeStore(),
        });

        const text = screen.getByText('This is some random text');

        expect(text).toBeInTheDocument();
    });
});
