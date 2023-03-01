import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';
export function App() {
  return (
    <>
      <Header />
      <Post
        author='Fernando Boscato'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sunt! Nesciunt officiis possimus nihil ea voluptatibus a corrupti! Necessitatibus nostrum fugit repellat nobis doloribus, similique deleniti mollitia? Error, deserunt dolor!'
      />
      <Post author='Diego Fernandes' content='Novo Post' />
      <Post />
    </>
  );
}
