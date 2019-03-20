const webpack = require('webpack');

const config = {
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true)g,
        }),
    ],
};

module.exports = config;
