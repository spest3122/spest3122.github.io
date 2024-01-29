import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/spest3122.github.io/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
