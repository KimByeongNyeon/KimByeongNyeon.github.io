import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,js,ts,tsx}",
      jsxRuntime: "automatic",
    }),
  ],
  base: "./",
  build: {
    outDir: "dist",
    target: "es2015",
    minify: "terser",
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
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
