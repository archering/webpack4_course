let path = require("path");

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"[name].bundle.js",
        path:__dirname+"/dist"
    }
}