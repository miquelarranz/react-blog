import * as React from 'react';
import { useHeaderStyles } from './Header.styles';

export const Header = () => {
    const classes = useHeaderStyles();
    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <span>This is a really cool fixed header</span>
                <span className={classes.menu}>User Menu</span>
            </div>
        </header>
    );
};
