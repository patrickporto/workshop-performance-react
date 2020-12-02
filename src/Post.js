import React from "react"
import { SortableElement } from 'react-sortable-hoc';


const areEqual = (prevProps, nextProps) => {
    return prevProps.post.id === nextProps.post.id
}

export const Post = SortableElement(React.memo(({ post, imgStyle }) => {
    return (<div className="post">
        {post.albumId === 2 && <div>Album 2</div>}
        <img src={post.url} alt={post.title} style={imgStyle} />
        <h3>{post.title}</h3>
    </div>)
}, areEqual))