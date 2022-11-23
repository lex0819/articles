import styles from './Post.module.css';

function Post({ body, title, userId }) {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <p>{body}</p>
      <span>{userId}</span>
    </div>
  );
}
export default Post;
