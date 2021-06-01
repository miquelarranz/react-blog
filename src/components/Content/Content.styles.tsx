import { createUseStyles } from 'react-jss';
import { desktopBreakpoint } from '../../theme/breakpoints';

export const useContentStyles = createUseStyles({
    container: {
        padding: '50px 8px 8px 8px',
    },
    content: {
        [`@media (min-width: ${desktopBreakpoint})`]: {
            display: 'flex',
        },
    },
});
