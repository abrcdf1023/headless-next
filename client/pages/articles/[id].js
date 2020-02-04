import Layout from '../../components/MyLayout'
import MarkdownElement from '../../components/MarkdownElement'
import fetch from 'isomorphic-unfetch'

const Article = ({
  article
}) => {
  return (
    <Layout>
      <h1>{article.name}</h1>
      <MarkdownElement text={article.content} />
    </Layout>
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
