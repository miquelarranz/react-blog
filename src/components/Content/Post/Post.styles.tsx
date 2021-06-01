import { createUseStyles } from 'react-jss';
import { desktopBreakpoint, tabletBreakpoint } from '../../../theme/breakpoints';

export const usePostStyles = createUseStyles({
    container: {
        padding: 8,
    },
    title: {
        textAlign: 'center',
    },
    content: {
        [`@media (min-width: ${tabletBreakpoint})`]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        [`@media (min-width: ${desktopBreakpoint})`]: {
            marginRight: 40,
        },
    },

    carousel: {
        height: 150,

        [`@media (min-width: ${tabletBreakpoint})`]: {
            height: 300,
            minWidth: 400,
            marginRight: 16,
        },
    },
    text: {
        textAlign: 'justify',
    },
});
