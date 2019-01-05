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
        publicPath:"./"  //  这里必须以 / 结尾
    },
    devServer:{
        contentBase:"dist",
        overlay:true,   //如果页面在编辑中出现报错终端退出，再次编辑后正确，server自动重载
        stats:{
            color:true //生成的文件会在console 高亮
        }
    },
    resolve:{
        /****
         * package.json 中的 main 属性决定了，当项目被引入时，输出的是哪个文件，
         * 而 vue(itself) 的 package.json 中的 main 指向的是 dist/vue.common.js。
         * Vue 打包生成三个文件，
         * 一个是 runtime only 的文件 vue.common.js，
         * 一个是 compiler only 的文件 compiler.js，
         * 一个是 runtime + compiler 的文件 vue.js。
         * 
         */
        alias:{
            vue:"vue/dist/vue.js"
        }
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