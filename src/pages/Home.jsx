import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/queries";
import { Link } from "react-router-dom";

export default function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p className="center">Loading...</p>;
  if (error) return <p className="center">Error loading posts</p>;

  return (
    <div className="home-wrapper">
      <h1 className="main-title">Blog Posts</h1>

      <div className="posts-wrapper">
        {data.posts.data.map((post) => (
          <div className="post-card" key={post.id}>
            <h2>{post.title}</h2>
            <Link to={`/post/${post.id}`} className="read-more">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
