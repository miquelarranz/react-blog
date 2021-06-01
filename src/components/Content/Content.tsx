import * as React from 'react';
import { useContentStyles } from './Content.styles';
import { ImagesCarousel } from './ImagesCarousel/ImagesCarousel';
import { Post } from './Post/Post';
import { Posts } from './Posts/Posts';

export const Content = () => {
    const classes = useContentStyles();

    return (
        <main className={classes.container}>
            <ImagesCarousel />
            <div className={classes.content}>
                <Post />
                <Posts />
            </div>
        </main>
    );
};
