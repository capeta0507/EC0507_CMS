module.exports = {
  reactStrictMode: true,
  assetPrefix: ".",
  async rewrites() {
    return [
      {
        source: '/drivers',
        destination: 'http://localhost:8060/drivers',
      },
      {
        source: '/driver/:no*',
        destination: 'http://localhost:8060/driver/:no*'
      },
    ]
  },
}