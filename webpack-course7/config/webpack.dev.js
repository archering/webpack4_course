let path = require("path");
let VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
    entry:{
        main:["./src/main.js"]
    },
    mode:"development",
    output:{
        filename:"[name]-bundle.js",
        path:path.join(__dirname,"..","/dist"),
        publicPath:"/"
    },
    devServer:{
        contentBase:"dist",
        overlay:true   //如果页面在编辑中出现报错终端退出，再次编辑后正确，server自动重载
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },{
                        loader:"css-loader"
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"[name].html"  //生成的文件起什么名字，名字来源于test匹配的结果
                        }
                    },
                    {
                        loader:"extract-loader"
                    },
                    {
                        loader:"html-loader",
                        options:{
                            attr:["img:src"]
                        }
                    }
                ]
            },
            {
                test:/\.(jpg|gif|png)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"assets/[name]-[hash:8].[ext]"
                        }
                    }
                ]
            },
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ],
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}