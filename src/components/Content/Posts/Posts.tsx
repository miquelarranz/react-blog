import * as React from 'react';
import { usePostsStyles } from './Posts.styles';
import { Carousel } from 'carousel-component-lib';

export const Posts = () => {
    const classes = usePostsStyles();

    const posts: string[] = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5', 'Post 6'];

    return (
        <aside className={classes.container}>
            <ul className={classes.posts}>
                {posts.map((post: string, index: number) => (
                    <li key={index} className={classes.post}>
                        {post}
                    </li>
                ))}
            </ul>
        </aside>
    );
};
