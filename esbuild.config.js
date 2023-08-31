const esbuild = require('esbuild').default;
const postCssPlugin = require('esbuild-style-plugin');
const { execSync } = require('child_process');

const isProduction = process.env.NODE_ENV === 'production';

const generateTypeDeclarations = () => {
  execSync('tsc --declaration --emitDeclarationOnly --outDir dist/types', {
    stdio: 'inherit',
  });
};

esbuild.build({
  entryPoints: ['./src/index.tsx'],
  bundle: true,
  format: 'esm',
  minify: isProduction,
  sourcemap: isProduction ? false : 'inline',
  target: "esnext",
  platform: 'browser',
  outfile: 'dist/bundle.esm.js', 
  external: [
    'react',
    'react-dom',
    'apexcharts',
    'react-apexcharts',
    'react-select',
  ],
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx',
    '.woff': 'file',
    '.woff2': 'file',
  },
  plugins: [
    postCssPlugin({
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    }),
  ],
})
  .then(() => {
    generateTypeDeclarations();
  })
  .catch(() => process.exit(1));
