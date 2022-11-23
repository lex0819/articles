import styles from './Post.module.css';

function Post({ body, title, userId }) {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <p>{body}</p>
      <address>User is {userId}</address>
    </div>
  );
}
export default Post;
