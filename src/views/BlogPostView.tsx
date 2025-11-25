// src/views/BlogPostView.tsx

import { useParams, Link } from "react-router-dom";
import { blogs } from "../blogs";

const BlogPostView = () => {
  const { slug } = useParams();

  // Find the blog by its slug
  const blog = blogs.find((b) => b.meta.slug === slug);

  // If blog does not exist, show 404 style message
  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Blog Not Found</h2>
        <p>The blog you're looking for does not exist.</p>
        <Link to="/journey" className="back-btn">
          Back to Journey
        </Link>
      </div>
    );
  }

  return (
    <div className="blogpost-container">
      <div className="blogpost-hero">
        <h1>{blog.meta.title}</h1>
        <p className="post-meta">
          <span>{blog.meta.tag}</span> · <span>{blog.meta.date}</span>
        </p>

        <img
          src={blog.meta.cover}
          alt={blog.meta.title}
          className="blogpost-cover"
        />
      </div>

      {/* Blog Content Rendered from Markdown */}
      <div
        className="blogpost-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <div className="back-section">
        <Link to="/journey" className="back-btn">
          ← Back to Journey
        </Link>
      </div>
    </div>
  );
};

export default BlogPostView;
