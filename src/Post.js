import React from "react"
import { SortableElement } from 'react-sortable-hoc';


export const Post = SortableElement(React.memo(({ post }) => {

    if (post.albumId === 2) {
        return (<div>
            <div>Album 2</div>
            <img src={post.url} alt={post.title} />
            <h3>{post.title}</h3>
        </div>)
    }

    return (<div>
        <img src={post.url} alt={post.title} />
        <h3>{post.title}</h3>
    </div>)
}))