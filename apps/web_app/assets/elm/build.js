const esbuild = require('esbuild');
const ElmPlugin = require('esbuild-plugin-elm');

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outdir: '../js',
  watch: process.argv.includes('--watch'),
  plugins: [
    ElmPlugin({
      //debug: true, // debug (default: false): Enable the time-travelling debugger
      clearOnWatch: true, // clearOnWatch (default: false): Clear the console before re-building on file changes
      // optimize (default: NODE_ENV === 'production'): Optimize the js output (true by default if NODE_ENV is production)
      // pathToElm (default: node_modules/.bin/elm || elm): Specify an explicit path to the elm executable
      // cwd (default: <PWD>): The current working directory/elm project root
    }),
  ],
}).catch(_e => process.exit(1))
