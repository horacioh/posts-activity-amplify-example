import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import { usePostById, usePostActions } from "./hooks";

export const Post = ({ match }) => {
  const postId = match.params.id;
  const { loading: postLoading, post } = usePostById(postId);
  const { loading: actionsLoading, actions } = usePostActions(postId);
  return (
    <section className="View">
      <div className="View-container">
        {postLoading ? (
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
      <div className="Post-actions">
        <div className="View__header">
          <h4 className="View_title">Post Activity</h4>
        </div>
        <div className="View__content">
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
      </div>
    </section>
  );
};
