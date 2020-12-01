import React, { useState, useEffect, useCallback } from "react"
import arrayMove from 'array-move';
import { Feed } from "./Feed"


function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/").then(response => response.json()).then(data => {
      setPosts(data)
    })
  }, [])
  const handleSortEnd = useCallback(({ oldIndex, newIndex }) => {
    setPosts(arrayMove(posts, oldIndex, newIndex));
  }, [])
  return (
    <Feed lockAxis="y" posts={posts} onSortEnd={handleSortEnd} />
  );
}

export default App;
