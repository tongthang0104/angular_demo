const webpack = require('webpack')
const path = require('path');

module.exports = {
    context: __dirname + '/src/client',
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/client/dist',
        filename: 'angApp.bundle.js'
    }
};
