import { createUseStyles } from 'react-jss';
import { tabletBreakpoint } from '../../../theme/breakpoints';

export const useImagesCarouselStyles = createUseStyles({
    images: {
        padding: 8,
        height: 60,

        [`@media (min-width: ${tabletBreakpoint})`]: {
            height: 200,
        },
    },
    image: {
        height: '100%',
        width: 'auto',
    },
});
