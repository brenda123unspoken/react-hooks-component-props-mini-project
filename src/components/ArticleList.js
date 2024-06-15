import React, { useEffect, useState } from 'react';
import Article from './Article';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/articles')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div>
      <h2>List of Articles</h2>
      {articles && articles.map(article => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
}

export default ArticleList;
