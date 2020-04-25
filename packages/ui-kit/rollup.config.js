import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];

const rollupConfig = {
  input: './src/index.ts',
  external: ['react'],
  plugins: [
    resolve({ fileExtensions }),
    commonjs(),
    babel({ fileExtensions, include: ['src/**/*'] }),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
};

export default rollupConfig;