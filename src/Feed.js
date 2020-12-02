import React from "react"
import { Post } from "./Post"
import { SortableContainer } from 'react-sortable-hoc';

export const Feed = SortableContainer(({ posts }) => {
    return <ul>
        {posts.map((post, index) => (
            <Post key={index} index={index} post={post} imgStyle={{ maxHeight: 200 }} />
        ))}
    </ul>
})