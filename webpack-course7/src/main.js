import Vue from 'vue';

import './index.html'
import App from './views/app.vue';


new Vue({
    el:"#abc",
    data:{

    },
    render:function(h){
        return h(App);
    }
});