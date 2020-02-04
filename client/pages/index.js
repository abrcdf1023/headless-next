/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <h1>自由時報</h1>
    <ul>
      {props.articles.map(article => (
        <li key={article.id}>
          <Link href="/articles/[id]" as={`/articles/${article.id}`}>
            <a>{article.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:1337/articles");
  const data = await res.json();

  console.log(`Article data fetched. Count: ${data.length}`);

  return {
    articles: data
  };
};

export default Index;
