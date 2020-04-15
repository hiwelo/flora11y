import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const rollupConfig = {
  input: './src/index.ts',
  external: ['react', 'styled-components'],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: ['**/*.test.ts', '**/*.test.tsx'],
    }),
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
