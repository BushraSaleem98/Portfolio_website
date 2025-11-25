// src/blogs/index.ts
import dataCuriosity from "./data-curiosity-to-cyber-vigilance.md";
import secondBlog from "./second-blog.md";
import thirdBlog from "./third-blog.md";

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  tag: string;
  description: string;
  cover: string; // now stored in public/blog-images
}

export interface BlogData {
  meta: BlogMeta;
  content: string;
}

export const blogs: BlogData[] = [
  {
    meta: {
      slug: "data-curiosity-to-cyber-vigilance",
      title: dataCuriosity.frontmatter.title,
      date: dataCuriosity.frontmatter.date,
      tag: dataCuriosity.frontmatter.tag,
      description: dataCuriosity.frontmatter.description,
      cover: dataCuriosity.frontmatter.cover,  // "/blog-images/data-curiosity-cover.jpg"
    },
    content: dataCuriosity.html,
  },
  {
    meta: {
      slug: "second-blog",
      title: secondBlog.frontmatter.title,
      date: secondBlog.frontmatter.date,
      tag: secondBlog.frontmatter.tag,
      description: secondBlog.frontmatter.description,
      cover: secondBlog.frontmatter.cover,
    },
    content: secondBlog.html,
  },
  {
    meta: {
      slug: "third-blog",
      title: thirdBlog.frontmatter.title,
      date: thirdBlog.frontmatter.date,
      tag: thirdBlog.frontmatter.tag,
      description: thirdBlog.frontmatter.description,
      cover: thirdBlog.frontmatter.cover,
    },
    content: thirdBlog.html,
  },
];
