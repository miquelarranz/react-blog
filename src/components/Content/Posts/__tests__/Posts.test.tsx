import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Posts } from '../Posts';

describe('Posts', () => {
    it('renders a Posts component', () => {
        render(<Posts />);

        const text = screen.getByText('Post 1');

        expect(text).toBeInTheDocument();
    });
});
