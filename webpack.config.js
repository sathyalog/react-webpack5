const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development'

if(process.env.NODE_ENV === 'production') {
    mode = 'production'
}
module.exports = {
    mode: mode,

    module: {
        rules:[
            {
                test: /\.css$/i,
                use:[{loader: MiniCssExtractPlugin.loader}, 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin()
    ],

    devtool:'source-map',

    devServer:{
        contentBase: './dist',
        hot: true,
    }
}