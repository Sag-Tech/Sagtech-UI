import cssnano from 'cssnano'

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' && cssnano({
      preset: 'default'
    })
  ]
}
