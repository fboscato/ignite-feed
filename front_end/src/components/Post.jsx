import {format} from 'data-fns'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author,publishedAt}) {
  const publishedDataFormatted = format(publishedAt,'11 marco 2023 às 08:14')
  return (
    <article className={styles.post}>
      <header>
        <dir className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </dir>

        <time title='' dateTime='2023-03-02 08:14:30'>
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀        </p>
        <p>  👉 jane.design/doctorcare        </p>
        <p> 
          <a href="">#novoprojeto</a> {' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea />
          <footer>
            <button type='submit'>Comentar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
    </article>
  );
}
