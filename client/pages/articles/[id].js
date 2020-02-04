import Head from 'next/head'
import Layout from '../../components/MyLayout'
import MarkdownElement from '../../components/MarkdownElement'
import fetch from 'isomorphic-unfetch'

const Article = ({
  article
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{article.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <h1>{article.name}</h1>
        <MarkdownElement text={article.content} />
      </Layout>
    </React.Fragment>
  )
}

Article.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`http://localhost:1337/articles/${id}`)
  const article = await res.json()

  console.log(`Fetched show: ${article.name}`)

  return { article }
}

export default Article
