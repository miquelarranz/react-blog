import * as React from 'react';
import { usePostStyles } from './Post.styles';
import { Carousel } from 'carousel-component-lib';

export const Post = () => {
    const classes = usePostStyles();
    const carouselName = 'text-carousel';
    const carouselSlides = [
        <h2>This is some random text</h2>,
        <p>This is a paragraph</p>,
        <h3>This is a cool header</h3>,
    ];

    return (
        <article className={classes.container}>
            <h1 className={classes.title}>Title of the post</h1>
            <div className={classes.content}>
                <div className={classes.carousel}>
                    <Carousel name={carouselName} slides={carouselSlides} />
                </div>
                <p className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </p>
            </div>
        </article>
    );
};
