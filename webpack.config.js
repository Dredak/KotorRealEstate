var path =  require('path');

module.exports = {
    entry: './js/hamburger.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js-min.js'
    }
};