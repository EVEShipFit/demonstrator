const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = function(env, argv) {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'eval',
    entry: "./bootstrap.js",
    output: {
      filename: "./bootstrap.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: "./index.html", to: "./" },
          { from: "./static", to: "./static" },
        ],
      }),
    ],
    performance: {
      hints: false
    },
    experiments: {
      asyncWebAssembly: true,
    }
  }
}
