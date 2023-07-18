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
import { default as dts } from "rollup-plugin-dts";

const commonPlugins = [
  commonjs(),
  resolve(),
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
  typescript({
    compilerOptions: {
      declaration: false,
    },
  }),
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
];

export default [
  {
    input: "src/index.tsx",
    output: {
      dir: "common-components",
      format: "esm",
      sourcemap: false,
    },
    plugins: [...commonPlugins],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.tsx",
    output: [
      {
        dir: "common-components",
        // file: "dist/index.d.ts",
        format: "esm",
      },
    ],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        use: ["sass"],
        plugins: [
          postcssImport(),
          tailwindcss("./tailwind.config.js"),
          require("autoprefixer"),
        ],
        extensions: [".css"],
        modules: true,
        include: ["**/*.css"],
      }),
      dts.default(),
    ],
    external: ["react", "react-dom"],
  },
];