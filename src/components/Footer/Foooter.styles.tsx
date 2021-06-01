import { createUseStyles } from 'react-jss';

export const useFooterStyles = createUseStyles({
    footer: {
        marginTop: 'auto',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
        height: 100,
        padding: 8,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    list: {
        listStyle: 'none',
    },
});
