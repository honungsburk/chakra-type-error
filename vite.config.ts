import react from "@vitejs/plugin-react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as path from "node:path";
import { defineConfig, UserConfigExport } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseConfig: UserConfigExport = {
    resolve: {
      alias: {
        src: path.resolve("src/"),
      },
    },
    plugins: [
      react({
        fastRefresh: process.env.NODE_ENV !== "test",
      }),
    ],
  };

  if (mode === "debug") {
    baseConfig.build = {
      sourcemap: true,
      minify: false,
    };
  }

  return baseConfig;
});
