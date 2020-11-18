const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].scripts.js",
    path: path.resolve(__dirname, "./dist/js"),
    publicPath: "",
  },
};
