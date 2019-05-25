// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      slug
      content
      createdAt
      actions {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPostAction = `query GetPostAction($id: ID!) {
  getPostAction(id: $id) {
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
export const listPostActions = `query ListPostActions(
  $filter: ModelPostActionFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postId
      createdAt
      payload {
        id
        title
        slug
        content
        createdAt
      }
    }
    nextToken
  }
}
`;
