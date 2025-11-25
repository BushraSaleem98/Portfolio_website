// src/views/Journey.tsx

import { Link } from "react-router-dom";
import { blogs } from "../blogs";

const Journey = () => {
  return (
    <div className="journey-page">
      <div className="hero">
        <h1>My Journey</h1>
        <p>Stories, insights, and my path through tech.</p>
      </div>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.meta.slug}>
            <Link to={`/journey/${blog.meta.slug}`}>
              <img
                src={blog.meta.cover}
                alt={blog.meta.title}
                className="blog-cover"
              />
            </Link>

            <div className="blog-info">
              <p className="blog-tag">{blog.meta.tag}</p>

              <Link to={`/journey/${blog.meta.slug}`}>
                <h2 className="blog-title">{blog.meta.title}</h2>
              </Link>

              <p className="blog-description">{blog.meta.description}</p>

              <p className="blog-date">{blog.meta.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
