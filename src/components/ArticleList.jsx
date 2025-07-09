import React from "react";
import Article from "./Article.jsx";
import blogData from "./data/blog.js";

function ArticleList() {
  return (
    <main>
      {blogData.posts.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
