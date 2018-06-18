var path = require("path");

var PUBLIC_DIR = path.join(__dirname, "public");
var SRC_DIR = path.join(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app.js",
    output: {
        path: PUBLIC_DIR ,
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                    ]
            },
            { 
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192' 
            }
        ]
    },
    devServer: {
        contentBase: PUBLIC_DIR,
        historyApiFallback: true

      },
    devtool: 'cheap-module-eval-source-map'
};

module.exports = config;