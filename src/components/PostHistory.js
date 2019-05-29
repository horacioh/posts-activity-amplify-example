import React, { useMemo } from "react";
import moment from "moment";
import "./PostHistory.css";
import { usePostHistory } from "./hooks";

export const Icon = () => null;

export const PostHistory = ({ postId }) => {
  const { loading, postHistory } = usePostHistory(postId);
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
            postHistory.map(item => <HistoryItem item={item} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export const HistoryItem = ({ item }) => {
  const date = useMemo(() => moment(item.createdAt).fromNow(), [item]);
  return (
    <li className="Post-actions__item" key={item.id}>
      <Icon action={item.action} />
      <div>
        <p>{`${item.action} by ${item.creator} ${date}`}</p>
      </div>
    </li>
  );
};
