let path = require("path");

module.exports = {
    
    entry:{
        main:["./src/main.js"]
    },
    mode:"development", //webpack 4 特有
    output:{
        filename:"[name]-bundle.js",
        path:path.resolve(__dirname,"/dist"),
        publicPath:"/"   // 这句话决定了  html 文件里面引用js的根路径
    },
    devServer:{
        contentBase:"dist"
    }
    
}