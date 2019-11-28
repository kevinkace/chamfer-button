const HtmlWebpackPlugin = require("html-webpack-plugin");
const CSSPlugin         = require("@modular-css/webpack/plugin");

module.exports = {
    // externals : { react : "React" },
    module : {
        rules : [
            {
                test    : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use     : {
                    loader : "babel-loader"
                }
            },
            {
                test : /\.html$/,
                use  : [
                    {
                    loader : "html-loader"
                    }
                ]
            },
            {
                test : /\.css$/,
                use  : "@modular-css/webpack/loader"
            }
        ]
    },
    plugins : [
        new CSSPlugin({
            css : "./main.css",

            before : [
                require("postcss-nested")()
            ]
        }),
        new HtmlWebpackPlugin({
            template : "./src/index.ejs",
            filename : "./index.html",

            title : "website title"
        })
    ]
};
