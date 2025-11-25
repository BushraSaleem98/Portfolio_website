// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdPlugin from "vite-plugin-markdown";

export default defineConfig({
  plugins: [
    react(),

    // Markdown loader
    mdPlugin({
      mode: ["html", "toc", "meta"], 
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
  ],

  // Allow images from public folder
  publicDir: "public",

  server: {
    port: 5173,
  },
});
