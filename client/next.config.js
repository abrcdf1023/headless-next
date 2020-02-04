const fetch = require('isomorphic-unfetch');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
    const res = await fetch('http://localhost:1337/articles');
    const articles = await res.json();

    articles.forEach(article => {
      paths[`/articles/${article.id}`] = { page: '/articles/[id]', query: { id: article.id } };
    });

    return paths;
  }
};