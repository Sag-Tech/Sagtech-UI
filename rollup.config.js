import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import tailwindcss from "tailwindcss";
import svgr from "@svgr/rollup";
import { default as dts } from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import generatePackageJson from "rollup-plugin-generate-package-json";
import postcssImport from "postcss-import";
import copy from "rollup-plugin-copy";

import pkg from "./package.json";
import autoprefixer from "autoprefixer";

const tailwindConfig = require("./tailwind.config.js");

const getPackageJson = () => {
  const base = { ...pkg };
  delete base.dependencies;
  return {
    ...base,
    dependencies: {
      "react-select": "^5.7.3",
    },
    peerDependencies: {
      react: ">=17.0.2",
      "react-dom": ">=17.0.2",
    },
  };
};

const commonPlugins = [
  commonjs(),
  typescript({
    compilerOptions: {
      declaration: false,
    },
  }),
  resolve(),
  generatePackageJson({
    outputFolder: "./common-components",
    baseContents: getPackageJson(),
  }),
  postcss({
    extensions: [".css"],
    extract: true,
    minimize: true,
    // use: [
    //   [
    //     "sass",
    //     {
    //       includePaths: ["./node_modules", "./src/styles"],
    //     },
    //   ],
    // ],
    plugins: [autoprefixer(), tailwindcss(tailwindConfig)],
  }),
  image(),
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
  copy({
    targets: [
      {
        src: "src/styles/Fonts",
        dest: "public",
      },
      {
        src: "src/styles",
        dest: "public",
      },
    ],
  }),
];

export default [
  //.js bundles
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
  //.d.ts definitions
  {
    input: "src/index.tsx",
    output: [
      {
        dir: "common-components",
        format: "esm",
      },
    ],
    plugins: [...commonPlugins, dts.default()],
    external: ["react", "react-dom"],
  },
];
