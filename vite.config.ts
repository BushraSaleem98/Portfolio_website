// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdPlugin from "vite-plugin-markdown";
import path from "path";

export default defineConfig({
  plugins: [
    react(),

    // Markdown loader
    mdPlugin({
      mode: ["html", "toc", "meta"], // html = render HTML, toc = table of contents, meta = frontmatter
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
  ],

  // Allow images from public folder
  publicDir: "public",

  resolve: {
    alias: {
      // Optional: for cleaner imports
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    port: 5173,
  },
});
