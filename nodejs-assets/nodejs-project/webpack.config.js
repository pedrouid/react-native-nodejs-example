const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "."),
    filename: "bundle.js"
  },
  optimization: {
    minimize: false
  },
  plugins: [new webpack.IgnorePlugin(/rn-bridge/)],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "8.6.0"
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
