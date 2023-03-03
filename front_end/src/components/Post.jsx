import styles from './Post.module.css';
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <dir className={styles.author}>
          <img src='https://github.com/fboscato.png' />
          <div className={styles.authorInfo}>
            <strong>Fernando Boscato</strong>
            <span>Web Developer</span>
          </div>
        </dir>
        <time title='11 marco 2023' dateTime='2023-03-02 08:14:30'>
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}></div>
    </article>
  );
}
