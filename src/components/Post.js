import React from "react";
import { Link } from 'react-router-dom'
import "./Post.css";
import { usePostById, usePostActions } from "./hooks";

export const Post = ({ match }) => {
  const postId = match.params.id;
  const { loading: postLoading, post } = usePostById(postId);
  const { loading: actionsLoading, actions } = usePostActions(postId);
  return (
    <section className="Post">
      <div className="Post-container">
        {postLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="Post__header">
              <Link to={`/post/edit/${postId}`}>Edit this post</Link>
              <h1 className="Post__title">{post.title}</h1>

            </div>
            <div className="Post__content">
              <p>{post.content}</p>
            </div>
          </>
        )}
      </div>
      <div className="Post-actions">
        <div className="Post-actions__header">
          <h4 className="Post-actions__title">Post Activity</h4>
        </div>
        <ul className="Post-actions__list">
          {actionsLoading ? (
            <p>Loading...</p>
          ) : (
            actions.map(action => (
              <li key={action.id}>
                <p>
                  {action.createdAt}: updated by {action.creator.username}
                </p>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};
