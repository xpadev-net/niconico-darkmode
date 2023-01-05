import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import pkg from "./package.json" assert {type: 'json'};
import { fileURLToPath } from 'url';
import * as path from "path";
const banner = `/*!
  niconico-darkmode v${pkg.version}
  Copyright (c) 2020 AyumuNekozuki
  Released under the ${pkg.license} License.
*/`;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'niconico-darkmode',
        banner
    },
    plugins: [
        typescript(),
        json(),
        image(),
        postcss({
            extensions: [".css"],
            modules: true,
        }),
        nodeResolve({
            extensions: [".js"],
            browser:true
        }),
        babel({
            babelHelpers: "bundled",
            configFile: path.resolve(__dirname, ".babelrc.js"),
        }),
        nodeResolve(),
    ]
}