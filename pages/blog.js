import {server} from '../config'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Layout.module.css'


export default function Blog({articles}) {
  return (
    <>
      <div className={`${styles.bgAzure} ${styles.container}`}>
      <h1>Blog</h1>
      <ArticleList articles={articles} />
    </div>
    </>
    
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }