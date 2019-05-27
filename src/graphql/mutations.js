// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    slug
    content
    actions {
      id
      postId
      creator
      createdAt
      payload {
        title
        slug
        content
      }
    }
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    title
    slug
    content
    actions {
      id
      postId
      creator
      createdAt
      payload {
        title
        slug
        content
      }
    }
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    title
    slug
    content
    actions {
      id
      postId
      creator
      createdAt
      payload {
        title
        slug
        content
      }
    }
  }
}
`;
export const createPostHistory = `mutation CreatePostHistory($input: CreatePostHistoryInput!) {
  createPostHistory(input: $input) {
    id
    postId
    creator
    createdAt
    payload {
      title
      slug
      content
    }
  }
}
`;
export const updatePostHistory = `mutation UpdatePostHistory($input: UpdatePostHistoryInput!) {
  updatePostHistory(input: $input) {
    id
    postId
    creator
    createdAt
    payload {
      title
      slug
      content
    }
  }
}
`;
export const deletePostHistory = `mutation DeletePostHistory($input: DeletePostHistoryInput!) {
  deletePostHistory(input: $input) {
    id
    postId
    creator
    createdAt
    payload {
      title
      slug
      content
    }
  }
}
`;
