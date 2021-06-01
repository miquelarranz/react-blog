import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Post } from '../Post';

describe('Post', () => {
    it('renders a Post component', () => {
        render(<Post />);

        const text = screen.getByText('This is some random text');

        expect(text).toBeInTheDocument();
    });
});
