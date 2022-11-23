import React, { useState, useEffect } from 'react';
import Post from './Post';
import styles from './Posts.module.css';

function Posts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  /*   if (isLoading) {
    return <h2>Loading...</h2>;
  } */
  /* if (error) {
    return <h2>Server doesn't response. Error: {error}</h2>;
  } */
  return (
    <div className={styles.posts}>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Server doesn't response. Error: {error}</h2>}
      {posts && posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
}
export default Posts;
