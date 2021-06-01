import * as React from 'react';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { useAppStyles } from './App.styles';

export const App = () => {
    const classes = useAppStyles();

    return (
        <main className={classes.container}>
            <Header />
            <Content />
            <Footer />
        </main>
    );
};
