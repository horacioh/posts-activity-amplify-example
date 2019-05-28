import React, { useState, useEffect } from "react";
import "./PostForm.css";
import { API, graphqlOperation } from "aws-amplify";
import { updatePost, createPostHistory } from "../graphql/mutations";
import { getPost } from '../graphql/queries'

export const UpdatePost = ({ match, history }) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    API.graphql(graphqlOperation(getPost, { id: match.params.id })).then(({ data }) => {
      const post = data.getPost;
      setTitle(post.title);
      setSlug(post.slug);
      setContent(post.content);
      setLoading(false);
    })
  }, [])


  const handleSubmit = async e => {
    e.preventDefault();
    const date = new Date();
    const { data } = await API.graphql(
      graphqlOperation(updatePost, { input: {
        id: match.params.id,
        title,
        content,
        slug
      }})
    );
    await API.graphql(
      graphqlOperation(createPostHistory, {
        input: {
          postId: match.params.id,
          createdAt: date,
          creator: "horacio",
          action: "UPDATED",
          payload: {
            title: data.updatePost.title,
            slug: data.updatePost.slug,
            content: data.updatePost.content
          }
        }
      })
    );
    history.push(`/post/${match.params.id}`);
  };

  return loading ? <p>Loading...</p> : (
    <section className="View">
      <div className="View-container">
        <div className="View__header">
          <h1 className="View__title">Update Post</h1>
        </div>
        <div className="Post__content">
          <form onSubmit={handleSubmit}>
            <div className="Field">
              <label htmlFor="title">title:</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="Field">
              <label htmlFor="title">slug:</label>
              <input
                type="text"
                name="slug"
                value={slug}
                onChange={e => setSlug(e.target.value)}
              />
            </div>
            <div className="Field">
              <label htmlFor="content">content:</label>
              <textarea
                name="content"
                value={content}
                onChange={e => setContent(e.target.value)}
              />
            </div>
            <div className="Field">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
