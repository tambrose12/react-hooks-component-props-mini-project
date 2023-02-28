import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  const name = blogData.name
  const image = blogData.image
  const about = blogData.about
  const postsArray = blogData.posts

  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList posts={postsArray} />
    </div>
  );
}

export default App;
