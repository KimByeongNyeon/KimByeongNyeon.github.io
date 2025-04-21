import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,js,ts,tsx}",
      jsxRuntime: "automatic",
    }),
  ],
  base: "/my-portfolio/",
  build: {
    outDir: "dist",
    target: "es2015",
    minify: "terser",
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        manualChunks: undefined,
      },
    },
    assetsInlineLimit: 0,
  },
  resolve: {
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@": "/src",
    },
  },
  esbuild: {
    jsx: "automatic",
    loader: "jsx",
    include: ["**/*.jsx", "**/*.js", "**/*.ts", "**/*.tsx"],
    exclude: [],
  },
});
