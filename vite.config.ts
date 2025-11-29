import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdPlugin from "vite-plugin-md";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    mdPlugin(), // ✅ call as a function without any options
  ],
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5173,
  },
});
