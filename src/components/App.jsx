import React from "react";
import blogData from "./data/blog";
import About from "./About.jsx";
import Header from "./Header.jsx";
import ArticleList from "./ArticleList.jsx";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <main>
      <ArticleList blogData={blogData} /></main>
    </div>
  );
}

export default App;
