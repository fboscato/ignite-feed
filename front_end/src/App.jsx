import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import './global.css';

const posts = [
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/fboscato.png',
      nome:'Fernando Boscato',
      role: 'Web designer'
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀  '},
      {type: 'link', content: '👉 jane.design/doctorcare '},
       
    ]
  },

]



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
