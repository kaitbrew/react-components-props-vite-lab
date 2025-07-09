import React from "react";

function Article({ title, date, preview }) {
  return (
    <div id="article">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </div>
  );
}

export default Article;
