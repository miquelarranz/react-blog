import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from '../Header';

describe('Header', () => {
    it('renders a Header component', () => {
        render(<Header />);

        const text = screen.getByText('User Menu');

        expect(text).toBeInTheDocument();
    });
});
