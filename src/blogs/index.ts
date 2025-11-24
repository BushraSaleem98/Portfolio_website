import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.resolve(__dirname);

export interface BlogMeta {
  title: string;
  slug: string;
  tag: string;
  date: string;
  cover: string;
  description: string;
}

export interface Blog {
  meta: BlogMeta;
  content: string;
}

function loadBlog(fileName: string): Blog {
  const filePath = path.join(blogDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    meta: data as BlogMeta,
    content,
  };
}

export const blogs: Blog[] = [
  loadBlog("data-curiosity-to-cyber-vigilance.md"),
  loadBlog("second-blog.md"),
  loadBlog("third-blog.md"),
].sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
