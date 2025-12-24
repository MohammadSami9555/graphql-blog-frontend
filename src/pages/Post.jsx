import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_POST } from "../graphql/queries";
import { ADD_COMMENT } from "../graphql/mutations";
import { useState } from "react";

export default function Post() {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id },
  });

  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [{ query: GET_POST, variables: { id } }],
  });

  if (loading) return <p className="loading">Loading post…</p>;
  if (error) return <p className="error">Something went wrong</p>;

  const submitComment = async (e) => {
    e.preventDefault();
    await addComment({
      variables: {
        postId: id,
        name: "Mohammad Sami",
        email: "sami@test.com",
        body: comment,
      },
    });
    setComment("");
  };

  return (
    <div className="page">
     
      <div className="post-card">

        <Link to="/" className="back-link">← Back to posts</Link>

        <h1 className="post-title">{data.post.title}</h1>
        <p className="post-body">{data.post.body}</p>

        <hr />

        <h3 className="section-title">Add Comment</h3>
        <form className="comment-form" onSubmit={submitComment}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment…"
            required
          />
          <button type="submit">Post Comment</button>
        </form>

        <h3 className="section-title">Comments</h3>
        <div className="comments">
          {data.post.comments.data.map((c) => (
            <div className="comment" key={c.id}>
              <strong>{c.name}</strong>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
