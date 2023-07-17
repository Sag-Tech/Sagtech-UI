import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import tailwindcss from "tailwindcss";
import svgr from "@svgr/rollup";
import postcssImport from "postcss-import";

export default {
  input: "src/index.tsx",
  output: {
    dir: "common-components",
    format: "esm",
    sourcemap: false,
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    postcss({
      extensions: [".css"],
      extract: true,
      minimize: true,
      use: [
        [
          "sass",
          {
            includePaths: ["./node_modules", "./src/styles"],
          },
        ],
      ],
      plugins: [
        postcssImport(),
        tailwindcss("./tailwind.config.js"),
        require("autoprefixer"),
      ],
    }),
    terser(),
    typescript(),
    svgr({
      dimensions: false,
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
                removeUnknownsAndDefaults: false,
              },
            },
          },
          { name: "removeViewBox", active: false },
          { name: "removeUnknownsAndDefaults", active: false },
        ],
      },
    }),
    image(),
  ],
  external: ["react", "react-dom"],
};
