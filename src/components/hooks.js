import { useState, useEffect } from "react";
// import * as API from "../api";
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../graphql/queries'

export const usePostsList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.graphql(graphqlOperation(listPosts)).then((res) => {
      setData(res.data);
      setLoading(false);
    })
  }, []);

  return {
    data,
    loading
  };
};

export const usePostById = id => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.fetchPostByID(id).then(result => {
      setPost(result);
      setLoading(false);
    });
  }, [id]);

  return {
    post,
    loading
  };
};

export const usePostActions = id => {
  const [loading, setLoading] = useState(true);
  const [actions, setActions] = useState(null);

  useEffect(() => {
    API.fetchPostActionsByID(id).then(result => {
      setActions(result.actions);
      setLoading(false);
    });
  }, [id]);

  return {
    actions,
    loading
  };
};
