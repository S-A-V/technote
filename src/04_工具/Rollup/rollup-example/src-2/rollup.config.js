import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src-2/main.js',
  output: [
    {
      dir: 'dist/src-2',
      format: 'amd',
    },
  ],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
  ],
};
