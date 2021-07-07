import {server} from '../config'
import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'


export default function Blog({articles}) {
  return (
    <div>
      <Head>
        <title>Hess Psicología</title>
        <meta name="keywords" content="psicología, terapia, guatemala, parejas, familia, salud, mental" />
      </Head>
      <h1>Blog</h1>
      <ArticleList articles={articles} />
    </div>
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