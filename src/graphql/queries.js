// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
      actions {
        id
        postId
        creator
        createdAt
      }
    }
    nextToken
  }
}
`;
export const getPostHistory = `query GetPostHistory($id: ID!) {
  getPostHistory(id: $id) {
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
export const listPostHistorys = `query ListPostHistorys(
  $filter: ModelPostHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
