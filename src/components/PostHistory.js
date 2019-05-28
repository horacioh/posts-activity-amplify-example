import React from "react";
import "./PostHistory.css";
import { usePostHistory } from "./hooks";

export const Icon = () => null;

export const PostHistory = ({ postId }) => {
  const { loading, postHistory } = usePostHistory(postId);
  console.log({ loading, postHistory });
  return (
    <div className="Post-actions">
      <div className="View__header">
        <h4 className="View_title">Post Activity</h4>
      </div>
      <div className="View__content">
        <ul className="Post-actions__list">
          {loading ? (
            <p>Loading...</p>
          ) : (
            postHistory.map(item => (
              <li className="Post-actions__item" key={item.id}>
                <Icon action={item.action} />
                <div>
                  <p>
                    {`${item.creator} has ${item.action} on ${item.createdAt}`}
                  </p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
