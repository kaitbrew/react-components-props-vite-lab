import React from "react";
import blogData from "./data/blog";
import About from "./About.jsx";
import Header from "./Header.jsx";
import ArticleList from "./ArticleList.jsx";

function App() {
  return (
    <div>
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList blogData={blogData} />
    </div>
  );
}

export default App;
