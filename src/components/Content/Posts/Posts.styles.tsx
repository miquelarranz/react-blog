import { createUseStyles } from 'react-jss';
import { desktopBreakpoint } from '../../../theme/breakpoints';
import { lightBlue } from 'carousel-component-lib';

export const usePostsStyles = createUseStyles({
    container: {
        display: 'none',
        [`@media (min-width: ${desktopBreakpoint})`]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 200,
            marginLeft: 16,
            borderLeft: `1px solid ${lightBlue}`,
        },
    },
    posts: {
        listStyle: 'none',
        padding: 0,
    },
    post: {
        marginTop: 16,
    },
});
