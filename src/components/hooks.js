import { useState, useEffect } from "react";
// import * as API from "../api";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts, getPost, listPostHistorys } from "../graphql/queries";

export const usePostsList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.graphql(graphqlOperation(listPosts)).then(res => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return {
    data,
    loading
  };
};

export const usePost = id => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.graphql(graphqlOperation(getPost, { id })).then(res => {
      setPost(res.data.getPost);
      setLoading(false);
    });
  }, [id]);

  return {
    post,
    loading
  };
};

export const usePostHistory = id => {
  const [postHistory, setPostHistory] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.graphql(
      graphqlOperation(listPostHistorys, { filter: { postId: { eq: id } } })
    ).then(res => {
      console.log("RES", res);
      setPostHistory(res.data.listPostHistorys.items);
      setLoading(false);
    }).catch(error => {
      console.log("ERROR", error);
    });
  }, [id]);

  return {
    postHistory,
    loading
  };
};
