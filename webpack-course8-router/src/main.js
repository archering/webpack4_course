import Vue from 'vue';
import VueRouter from 'vue-router';
import './index.html'

import App from './views/app.vue';

Vue.use(VueRouter);

import home from './views/home.vue';
import product from './views/product.vue';

var user = Vue.component("anything",{
    template:"<div>"+
                "<h3>{{hello}}</h3>"+
            "</div>",
    data:function(){
        return {
            hello :"* package.json 中的 main 属性决定了，当项目被引入时，输出的是哪个文件，" +
                    "* 而 vue(itself) 的 package.json 中的 main 指向的是 dist/vue.common.js。"+
                    "* Vue 打包生成三个文件，"+
                    "* 一个是 runtime only 的文件 vue.common.js，"+
                    "* 一个是 compiler only 的文件 compiler.js"+
                    "* 一个是 runtime + compiler 的文件 vue.js。"
        }
    }
});

let router = new VueRouter({
    routes:[{
        path:"/",
        redirect:"/home"
    },{
        name:"home",
        path:"/home",
        component:home
    },{
        name:"user",
        path:"/user",
        component:user        
    },{
        name:"product",
        path:"/product",
        component:product
    }]
});

new Vue({
    el:"#abc",
    data:{

    },
    router:router,
    render:function(h){
        return h(App);
    }
});