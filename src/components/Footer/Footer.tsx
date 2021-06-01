import * as React from 'react';
import { useFooterStyles } from './Foooter.styles';

export const Footer = () => {
    const classes = useFooterStyles();
    return (
        <footer className={classes.footer}>
            <p>This is a cool footer</p>
            <ul className={classes.list}>
                <li>Some text</li>
                <li>More text</li>
                <li>Even more text</li>
            </ul>
        </footer>
    );
};
