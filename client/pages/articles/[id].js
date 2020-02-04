import Layout from '../../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const Article = ({
  article
}) => (
  <Layout>
    <h1>{article.name}</h1>
    <p>{article.content}</p>
  </Layout>
)

Article.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`http://localhost:1337/articles/${id}`)
  const article = await res.json()

  console.log(`Fetched show: ${article.name}`)

  return { article }
}

export default Article
