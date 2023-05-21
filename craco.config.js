import BrotliPlugin from 'brotli-webpack-plugin'
import cssnano from 'cssnano'

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (env === 'production') {
        webpackConfig.plugins.push(
          new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg|ts|tsx|jsx)$/,
            threshold: 10240,
            minRatio: 0.8
          })
        )
      }
      return webpackConfig
    }
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        process.env.NODE_ENV === 'production' && cssnano({
          preset: 'default'
        })
      ]
    }
  }
}
