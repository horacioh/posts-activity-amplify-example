const data = {
  allPosts: [
    {
      id: "1",
      title: "Hello post",
      slug: "hello-post",
      content: "some content",
      createdAt: "2019-01-20",
      updatedAt: "2019-05-16"
    },
    {
      id: "2",
      title: "Another post",
      slug: "another-post",
      content: "moooar content",
      createdAt: "2019-05-12",
      updatedAt: "2019-05-18"
    }
  ],
  allPostActions: [
    {
      id: "1",
      actions: [
        {
          id: "0987",
          createdAt: "2019-05-16",
          creator: {
            username: "horacio"
          },
          payload: {
            title: "Hello post",
            slug: "hello-post",
            content: "some content"
          }
        },
        {
          id: "0983",
          createdAt: "2019-03-12",
          creator: {
            username: "horacio"
          },
          payload: {
            title: "A big title for this post",
            slug: "a-big-title-for-this-post",
            content: "little content"
          }
        },
        {
          id: "0989",
          createdAt: "2019-02-02",
          creator: {
            username: "horacio"
          },
          payload: {
            title: "test post",
            slug: "test-post",
            content: "."
          }
        }
      ]
    }
  ]
};

export const fetchPosts = () => Promise.resolve(data);

export const fetchPostByID = id => {
  const result = data.allPosts.filter(({ id: postId }) => postId === id);
  const post = result.length > 0 ? result[0] : {};
  return Promise.resolve(post);
};

export const fetchPostActionsByID = id => {
  const result = data.allPostActions.filter(({ id: postId }) => postId === id);
  const post = result.length > 0 ? result[0] : {};
  return Promise.resolve(post);
};
