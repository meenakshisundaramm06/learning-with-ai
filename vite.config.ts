import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        presentation: resolve(import.meta.dirname, "index.html"),
        notes: resolve(import.meta.dirname, "notes/index.html"),
      },
    },
  },
});
