const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env", "@babel/preset-react"],
                    plugins: ['transform-class-properties', '@babel/plugin-syntax-dynamic-import']
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {test: /\.svg$/, loader: 'svg-loader?pngScale=2'}
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx"]},
    output: {
        path: path.resolve(__dirname, "public/"),
        publicPath: "/",
        filename: "[name].js"
    }
};