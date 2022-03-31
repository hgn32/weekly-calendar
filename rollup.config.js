import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".ts"];

export default {
  input: "./src/weekly-calendar-card.ts",
  output: {
    file: "./build/weekly-calendar-card.js",
    format: "cjs",
  },
  plugins: [
    resolve({ extensions }),
    json(),
    babel({ extensions, include: ["src/**/*"], babelHelpers: "bundled" }),
  ],
};