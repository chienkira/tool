module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tool/'
    : '/',
  devServer: {
    port: 8080
  }
}
