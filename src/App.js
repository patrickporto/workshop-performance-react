import React, { useState, useEffect } from "react"
import arrayMove from 'array-move';
import { Feed } from "./Feed"


function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/").then(response => response.json()).then(data => {
      setPosts(data)
    })
  }, [])
  return (
    <Feed lockAxis="y" posts={posts} onSortEnd={({ oldIndex, newIndex }) => {
      setPosts(arrayMove(posts, oldIndex, newIndex));
    }} />
  );
}

export default App;
