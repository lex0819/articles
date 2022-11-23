import React, { useState, useEffect } from 'react';
import Post from './Post';

function Posts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.log(error.message));
  }, []);

  if (!posts) return <div>Server doesn't response</div>;
  return (
    <div>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</div>
  );
}
export default Posts;
