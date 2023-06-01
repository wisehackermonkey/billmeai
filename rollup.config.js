import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sass from 'rollup-plugin-sass';

export default {
  input: 'src/index.js', // Update the input file path as per your project structure
  output: {
    file: 'public/bundle.js', // Update the output file path as per your project structure
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    // Resolve node modules
    resolve(),
    // Convert CommonJS modules to ES6
    commonjs(),
    // Compile Sass files
    sass({
      output: 'public/bundle.css', // Output path for the compiled CSS file
    }),
    // Minify the output bundle
    terser(),
  ],
};
