import preact from "@preact/preset-vite";
import fs from "fs";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const mdx = await import('@mdx-js/rollup');

  return {
    server: {
      https: {
        key: fs.readFileSync("./.cert/key.pem"),
        cert: fs.readFileSync("./.cert/cert.pem")
      }
    },
    plugins: [mdx.default(), preact()]
  };
});
