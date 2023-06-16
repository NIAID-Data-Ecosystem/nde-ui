import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    external: [...Object.keys(pkg.dependencies)],
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: 'node_modules/**',
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      }),
      resolve(),
      commonjs(),
      typescript({tsconfig: './tsconfig.json'}),
      // Minify es bundle.
      terser(),
      // Bundle image and json  files.
      image(),
      json(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{file: 'dist/index.d.ts', format: 'esm'}],
    // This is a plugin that lets you roll-up your .d.ts definition files.
    plugins: [dts()],
  },
];
