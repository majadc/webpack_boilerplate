const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    writeToDisk: true,
    port: 9000,
  },
});
