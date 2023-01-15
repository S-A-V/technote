import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/src/bundle.js',
      format: 'umd',
      name: 'main',
    },
    {
      file: 'dist/src/bundle.min.js',
      format: 'iife',
      name: 'main',
      plugins: [terser()],
    },
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
  ],
};
