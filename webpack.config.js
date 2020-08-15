module.exports = {
  entry: __dirname + "/public/src/index.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public/dist",
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
