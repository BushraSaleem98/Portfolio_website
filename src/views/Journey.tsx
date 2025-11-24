import React from "react";
import { Link } from "react-router-dom";
import { BLOGS } from "../constants";

const Journey: React.FC = () => {
  const sortedBlogs = [...BLOGS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-10">Journey Log</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedBlogs.map((blog) => (
            <Link
              to={`/journey/${blog.slug}`}
              key={blog.id}
              className="group block bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-fox-500/50 transition-all hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="rounded-xl mb-5 w-full h-48 object-cover"
              />

              <span className="text-fox-500 text-xs font-semibold tracking-wide">
                {blog.tag}
              </span>

              <h2 className="text-xl font-bold text-white mt-2 group-hover:text-fox-400">
                {blog.title}
              </h2>

              <p className="text-gray-400 mt-2">{blog.description}</p>

              <p className="text-xs text-slate-600 mt-3">
                {new Date(blog.date).toDateString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
