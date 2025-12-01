// src/blogs/index.ts
import dataCuriosity from "./data-curiosity-to-cyber-vigilance.md";
import secondBlog from "./second-blog.md";
import thirdBlog from "./third-blog.md";
import freeRoadmap from "./Free_Roadmap.md";

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  tag: string;
  description: string;
  cover: string;
}

export interface BlogData {
  meta: BlogMeta;
  content: string;
}

export const blogs: BlogData[] = [
  {
    meta: {
      slug: dataCuriosity.frontmatter.slug,
      title: dataCuriosity.frontmatter.title,
      date: dataCuriosity.frontmatter.date,
      tag: dataCuriosity.frontmatter.tag,
      description: dataCuriosity.frontmatter.description,
      cover: dataCuriosity.frontmatter.cover,
    },
    content: dataCuriosity.html,
  },
  {
    meta: {
      slug: secondBlog.frontmatter.slug,
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
      slug: thirdBlog.frontmatter.slug,
      title: thirdBlog.frontmatter.title,
      date: thirdBlog.frontmatter.date,
      tag: thirdBlog.frontmatter.tag,
      description: thirdBlog.frontmatter.description,
      cover: thirdBlog.frontmatter.cover,
    },
    content: thirdBlog.html,
  },
  {
    meta: {
      slug: freeRoadmap.frontmatter.slug,
      title: freeRoadmap.frontmatter.title,
      date: freeRoadmap.frontmatter.date,
      tag: freeRoadmap.frontmatter.tag,
      description: freeRoadmap.frontmatter.description,
      cover: freeRoadmap.frontmatter.cover,
    },
    content: freeRoadmap.html,
  },
];
