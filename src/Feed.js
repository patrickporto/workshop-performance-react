import React, { useCallback } from "react"
import { Post } from "./Post"
import { SortableContainer } from 'react-sortable-hoc';
import { FixedSizeList as List } from 'react-window';


export const Feed = SortableContainer(({ posts }) => {
    const renderRow = useCallback(({ index, style }) => {
        const post = posts[index]
        return (
            <li key={post.id} style={style}>
                <Post index={index} post={post} imgStyle={{ maxHeight: 200 }} />
            </li>
        )
    }, [posts])
    return <ul>
        <List
            itemCount={posts.length}
            itemSize={270}
            width={window.innerWidth}
            height={window.innerHeight}
            overscanCount={3}
        >
            {renderRow}
        </List>
    </ul>
})