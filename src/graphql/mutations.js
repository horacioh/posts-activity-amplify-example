// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    slug
    content
    createdAt
    actions {
      items {
        id
        postId
        createdAt
      }
      nextToken
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
    createdAt
    actions {
      items {
        id
        postId
        createdAt
      }
      nextToken
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
    createdAt
    actions {
      items {
        id
        postId
        createdAt
      }
      nextToken
    }
  }
}
`;
export const createPostAction = `mutation CreatePostAction($input: CreatePostActionInput!) {
  createPostAction(input: $input) {
    id
    postId
    createdAt
    payload {
      id
      title
      slug
      content
      createdAt
      actions {
        nextToken
      }
    }
  }
}
`;
export const updatePostAction = `mutation UpdatePostAction($input: UpdatePostActionInput!) {
  updatePostAction(input: $input) {
    id
    postId
    createdAt
    payload {
      id
      title
      slug
      content
      createdAt
      actions {
        nextToken
      }
    }
  }
}
`;
export const deletePostAction = `mutation DeletePostAction($input: DeletePostActionInput!) {
  deletePostAction(input: $input) {
    id
    postId
    createdAt
    payload {
      id
      title
      slug
      content
      createdAt
      actions {
        nextToken
      }
    }
  }
}
`;
