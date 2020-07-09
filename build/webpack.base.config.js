// import HappyPack from "happypack";
const HappyPack = require("happypack");

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'app': './src/index.tsx'
  },
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx|\.ts|\.tsx?$/i,
        // use: [{
        //   loader: 'ts-loader'
        // }],
        use: "happypack/loader?id=babel",
        exclude: /node_modules/
      }
    ],
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html'
    }),
    new HappyPack({
      id: "babel",
      loaders: [
        {
          loader: "babel-loader",
          options: {
            // https://github.com/babel/babel-loader#options
            // cacheDirectory: isDebug,

            // https://babeljs.io/docs/usage/options/
            babelrc: false,
            configFile: false,
            presets: [
              // A Babel preset that can automatically determine the Babel plugins and polyfills
              // https://github.com/babel/babel-preset-env
              [
                "@babel/preset-env",
                {
                  // targets: {
                  //   browsers: pkg.browserslist,
                  // },
                  // forceAllTransforms: !isDebug, // for UglifyJS
                  modules: false,
                  useBuiltIns: false,
                  debug: false,
                },
              ],
              // Flow
              // https://github.com/babel/babel/tree/master/packages/babel-preset-flow
              // "@babel/preset-flow",
              // JSX
              // https://github.com/babel/babel/tree/master/packages/babel-preset-react
              ["@babel/preset-react", { development: false }],
              
              '@babel/preset-typescript'
            ],
            plugins: [
              // 支持装饰器的写法
              ["@babel/plugin-proposal-decorators", { legacy: true }],

              // Experimental ECMAScript proposals
              ["@babel/plugin-proposal-class-properties", { loose: true }],

              // ["mobx-deep-action"],

            ],
          },
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}