import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BLOGS } from "../constants";
import ReactMarkdown from "react-markdown";

const BlogPostView: React.FC = () => {
  const { id } = useParams();
  const blog = BLOGS.find((b) => b.slug === id);

  const [content, setContent] = useState("");

  useEffect(() => {
    if (blog) {
      import(`../blogs/${blog.slug}.md`)
        .then((res) => fetch(res.default))
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [blog]);

  if (!blog)
    return (
      <div className="pt-32 text-center text-white">Blog not found...</div>
    );

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="rounded-xl w-full h-64 object-cover mb-8"
        />

        <span className="text-fox-500 text-sm font-bold">{blog.tag}</span>
        <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
        <p className="text-slate-600 mb-10">
          {new Date(blog.date).toDateString()}
        </p>

        <article className="prose prose-invert prose-fox max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default BlogPostView;
