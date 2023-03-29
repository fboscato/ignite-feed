import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import './global.css';

const post = [
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/fboscato.png',
      name:'Fernando Boscato',
      role: 'Web designer'
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀  '},
      {type: 'link', content: '👉 jane.design/doctorcare '},
       
    ],
    publishedAt: new Date('2023-03-29 17:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name:'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀  '},
      {type: 'link', content: '👉 jane.design/doctorcare '},
       
    ],
    publishedAt: new Date('2023-03-30 17:00:00'),
  },
]



export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {post.map(post =>{
          return (
          <Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
          )
        })}
          
        </main>
      </div>
    </div>
  );
}
