const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        clean: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './template.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, '/dist'),
        },
        port: 9000,
        compress: true,
        historyApiFallback: true,
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        },
    }
}

module.exports = config;
