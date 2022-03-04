// vite.config.ts
import preact from "@preact/preset-vite";
import fs from "fs";
import {defineConfig} from "vite";
import mdx from "vite-plugin-mdx";
var vite_config_default = defineConfig({
  server : {
    https : {
      key : fs.readFileSync("./.cert/key.pem"),
      cert : fs.readFileSync("./.cert/cert.pem")
    }
  },
  plugins : [ preact(), mdx() ]
});
export {vite_config_default as default};
//#
//sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBwcmVhY3QgZnJvbSBcIkBwcmVhY3QvcHJlc2V0LXZpdGVcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgbWR4IGZyb20gJ3ZpdGUtcGx1Z2luLW1keCc7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgaHR0cHM6IHtcbiAgICAgIGtleTogZnMucmVhZEZpbGVTeW5jKFwiLi8uY2VydC9rZXkucGVtXCIpLFxuICAgICAgY2VydDogZnMucmVhZEZpbGVTeW5jKFwiLi8uY2VydC9jZXJ0LnBlbVwiKSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbcHJlYWN0KCksIG1keCgpXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsS0FBSyxHQUFHLGFBQWE7QUFBQSxNQUNyQixNQUFNLEdBQUcsYUFBYTtBQUFBO0FBQUE7QUFBQSxFQUcxQixTQUFTLENBQUMsVUFBVTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
