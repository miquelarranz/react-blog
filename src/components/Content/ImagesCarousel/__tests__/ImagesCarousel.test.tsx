import * as React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ImagesCarousel } from '../ImagesCarousel';
import { fakeStore, renderStoreHelper } from '../../../../__tests__/__mocks__/renderStoreHelper';
import * as GetImageFile from '../../../../store/Images/actions/getImage';

describe('ImagesCarousel', () => {
    const selectors = {
        carousel: 'images-carousel',
        leftArrow: 'left-arrow',
    };

    it('renders an ImagesCarousel component', () => {
        renderStoreHelper({
            component: <ImagesCarousel />,
            rootState: fakeStore(),
        });

        const text = screen.getByTestId(selectors.carousel);

        expect(text).toBeInTheDocument();
    });

    it('triggers the getImage action when clicking on the carrousel arrow', () => {
        const getImageMock = jest.spyOn(GetImageFile, 'getImage');

        renderStoreHelper({
            component: <ImagesCarousel />,
            rootState: fakeStore(),
        });

        const arrow = screen.getByTestId(selectors.leftArrow);

        fireEvent.click(arrow);

        expect(getImageMock).toHaveBeenCalled();
    });
});
