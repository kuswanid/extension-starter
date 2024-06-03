const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'extension'),
        clean: true
    },
    performance: { hints: false },
    devServer: {
        devMiddleware: { writeToDisk: true }
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: 'public' }]
        })
    ]
}