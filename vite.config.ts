import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import fs from "fs";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync("./.cert/key.pem"),
      cert: fs.readFileSync("./.cert/cert.pem"),
    },
  },
  plugins: [preact()],
});
