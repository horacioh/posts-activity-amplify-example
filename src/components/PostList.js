import React from "react";
import { Link } from "react-router-dom";
import "./PostList.css";
import { usePostsList } from './hooks'

export const PostList = () => {
  const {data, loading} = usePostsList();
  return (
  <div>
    <Link to="/post/create">Create a post</Link>
    <ul className="post-list">
      {!loading && data.listPosts.items.map(post => (
        <li key={post.id} className="post-item">
          <Link to={`post/${post.id}`}>
            <p className="post-item__title">{post.title}</p>
            <p className="post-item__date">{post.date}</p>
            <p className="post-item__content">{post.content}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)};
