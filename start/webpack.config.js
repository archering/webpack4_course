var path = require("path");
var webpack = require("webpack");


module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"/dist")
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader"
            }
        ]
    }
}