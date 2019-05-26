import React, { useState } from "react";
import "./PostForm.css";
import { API, graphqlOperation } from "aws-amplify";
import { createPost } from "../graphql/mutations";

export const PostForm = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async e => {
    const input = { title, content, slug, createdAt: new Date() }
    console.log(input);
    e.preventDefault();
    const post = await API.graphql(graphqlOperation(createPost, { input }));
    console.log(post);
  };

  return (
    <section className="View">
      <div className="View-container">
        <div className="View__header">
          <h1 className="View__title">New Post</h1>
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
