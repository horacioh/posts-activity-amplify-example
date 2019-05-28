import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import { usePost, usePostHistory } from "./hooks";
import { PostHistory } from "./PostHistory";

export const Post = ({ match }) => {
  const postId = match.params.id;
  const { loading, post } = usePost(postId);
  console.log({ loading, post, postId});
  return (
    <section className="View">
      <div className="View-container">
        {loading ? ( 
          <p>Loading...</p>
        ) : (
          <>
            <div className="View__header">
              <Link to={`/post/edit/${postId}`}>Edit this post</Link>
              <h1 className="View__title">{post.title}</h1>
            </div>
            <div className="View__content">
              <p>{post.content}</p>
            </div>
          </>
        )}
      </div>
      <PostHistory postId={postId} />
    </section>
  );
};
