"use strict";

const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

console.log(`Building for ${isProduction ? "production" : "development"}`);

const config = {
    entry: {
        main: "./src",
    },
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: "dist/",
        filename: "[name].js",
        libraryTarget: "umd",
        library: "ExpandableTree",
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }],
                            "@babel/preset-react",
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: "[name].css",
            // chunkFilename: "[id].css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/style.scss",
                    to: "[name][ext]",
                },
            ],
        }),
    ],

    externals: [
        nodeExternals({
            // load non-javascript files with extensions, presumably via loaders
            allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
        }),
    ],
};

module.exports = config;
