import { Header } from './components/Header';
import { Post } from './Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Fernando Boscato'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sunt! Nesciunt officiis possimus nihil ea voluptatibus a corrupti! Necessitatibus nostrum fugit repellat nobis doloribus, similique deleniti mollitia? Error, deserunt dolor!'
          />
          <Post author='Diego Fernandes' content='Novo Post' />
          <Post />
        </main>
      </div>
    </div>
  );
}
