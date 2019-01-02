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
    module:{
        rules:[
          { 
            test:/\.css$/,  
            use:[
                {
                    loader:"style-loader"
                },
                {
                    loader:"css-loader"  //use 执行顺序是从右往左，先进行css编译，在交给style-loader 插入html
                }
            ]
          }
        ] 
    },
    devServer:{
        contentBase:"dist"
    }
    
}