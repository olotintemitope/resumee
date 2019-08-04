module.exports = {
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
            }
        ],
    },
};