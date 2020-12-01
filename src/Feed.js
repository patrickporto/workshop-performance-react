import React from "react"
import { Post } from "./Post"
import { SortableContainer } from 'react-sortable-hoc';
import LazyLoad from 'react-lazyload';

export const Feed = SortableContainer(({ posts }) => {
    return <ul>
        {posts.map((post, index) => (
            <LazyLoad unmountIfInvisible>
                <Post key={index} index={index} post={post} />
            </LazyLoad>
        ))}
    </ul>
})