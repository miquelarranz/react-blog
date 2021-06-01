import { createUseStyles } from 'react-jss';
import { mediumBlue, white } from 'carousel-component-lib';

export const useHeaderStyles = createUseStyles({
    header: {
        height: 50,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
        backgroundColor: mediumBlue,
        color: white,
    },
    content: {
        height: 36,
        padding: 8,
        display: 'flex',
        alignItems: 'center',
    },
    menu: {
        marginLeft: 'auto',
    },
});
