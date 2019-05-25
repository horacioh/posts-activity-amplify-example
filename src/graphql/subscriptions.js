// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreatePostAction = `subscription OnCreatePostAction {
  onCreatePostAction {
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
export const onUpdatePostAction = `subscription OnUpdatePostAction {
  onUpdatePostAction {
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
export const onDeletePostAction = `subscription OnDeletePostAction {
  onDeletePostAction {
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
