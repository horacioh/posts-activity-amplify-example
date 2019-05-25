import { useState, useEffect } from "react";
import * as API from "../api";

export const usePosts = (defaultData = null) => {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.fetchPosts().then(result => {
      setData(result);
      setLoading(false);
    });
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
  }, []);

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
  });

  return {
    actions,
    loading
  };
};
