import { defineConfig } from 'vite';
import fs from 'fs/promises';

//import reactJsx from 'vite-react-jsx'

// https://github.com/vitejs/vite/discussions/3448
// How to use `.js` instead of `.jsx`

export default defineConfig(() => ({
  server: {
    port: 3000
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    // loader: "tsx",
    // include: /src\/.*\.[tj]sx?$/,
    exclude: [],
    jsxFactory: 'h',
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
}));

/*
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragmentFactory: 'Fragment',
    loader: "jsx",
    include: /src\/.*\.jsx?$/
  },
  //plugins: [
  //  reactJsx()
  //]
})

*/
