import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export function Comment({content,onDeleteComment}) {
  function handleDeleteComment(){
    onDeleteComment(content)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/fboscato.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernando Boscato</strong>
              <time
                title="11 marco 2023 às 08:14"
                dateTime="2023-03-02 08:14:30"
              >
                {" "}
                Cerca de 1h atráz
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={23} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
