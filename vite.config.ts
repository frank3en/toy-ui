import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log("path :>> ", path);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.js"),
      name: "MyLib",
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "React",
        },
      },
    },
  },
});
