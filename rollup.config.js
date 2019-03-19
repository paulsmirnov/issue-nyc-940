import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [{
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  }, {
    file: pkg.module,
    format: 'es',
  }],
  plugins: [
    babel(),
  ],
};