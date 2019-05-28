// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    title
    slug
    content
    actions {
      id
      postId
      creator
      createdAt
      action
      payload {
        title
        slug
        content
      }
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
    actions {
      id
      postId
      creator
      createdAt
      action
      payload {
        title
        slug
        content
      }
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
    actions {
      id
      postId
      creator
      createdAt
      action
      payload {
        title
        slug
        content
      }
    }
  }
}
`;
export const onCreatePostHistory = `subscription OnCreatePostHistory {
  onCreatePostHistory {
    id
    postId
    creator
    createdAt
    action
    payload {
      title
      slug
      content
    }
  }
}
`;
export const onUpdatePostHistory = `subscription OnUpdatePostHistory {
  onUpdatePostHistory {
    id
    postId
    creator
    createdAt
    action
    payload {
      title
      slug
      content
    }
  }
}
`;
export const onDeletePostHistory = `subscription OnDeletePostHistory {
  onDeletePostHistory {
    id
    postId
    creator
    createdAt
    action
    payload {
      title
      slug
      content
    }
  }
}
`;
