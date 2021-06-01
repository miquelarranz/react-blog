import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Footer } from '../Footer';

describe('Footer', () => {
    it('renders a Footer component', () => {
        render(<Footer />);

        const text = screen.getByText('This is a cool footer');

        expect(text).toBeInTheDocument();
    });
});
