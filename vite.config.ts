import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import "vite/modulepreload-polyfill";

// vite.config.js
export default defineConfig({
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: "/path/to/main.js",
    },
  },
});
