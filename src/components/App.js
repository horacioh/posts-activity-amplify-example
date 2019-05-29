import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Post, CreatePost, PostList, UpdatePost } from "./index";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-header__title">Store Posts History example</h1>
          <Link to="/">go home
          </Link>
        </header>
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/post/create" exact component={CreatePost} />
            <Route path="/post/edit/:id" exact component={UpdatePost} />
            <Route path="/post/:id" component={Post} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
