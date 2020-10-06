const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
var path = require("path");
var webpack = require("webpack");
module.exports = (webpackConfigEnv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "aec",
        projectName: "root-theme",
        webpackConfigEnv,
    });

    return webpackMerge.smart(defaultConfig, {
        module: {
            rules: [
                // {
                //     test: require.resolve("jquery"),
                //     use: [
                //         {
                //             loader: "expose-loader",
                //             options: "$",
                //         },
                //     ],
                // },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                // {
                //     test: /\.(jpe?g|png|gif|svg)$/i,
                //     loader: "file-loader?name=app/images/[name].[ext]",
                // },

                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: "file-loader",
                        },
                    ],
                },
                // {
                //     test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                //     loader: "url-loader?limit=100000",
                // },
            ],
        },
        output: {
            filename: "aec-root-theme.js",
            path: path.resolve(__dirname, "dist"),
        },
        resolve: {
            alias: {
                jquery: "jquery/src/jquery",
            },
        },
        devServer: {
            // contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9002,
            writeToDisk: true,
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
            }),
        ],
        // modify the webpack config however you'd like to by adding to this object
    });
};
