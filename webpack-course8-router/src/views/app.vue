<template>
    <div>
        <div>
           <router-link :to="link.path"  v-for="(link,index) in links" :key="index">{{link.name}}</router-link>
        </div>
        <router-view></router-view>   
    </div>    
</template>

<script>
    export default {
        name:"home",
        data:function(){
            return {
                title:"this is from home page",
                links:[
                    {
                        name:"home",
                        path:"/home"
                    },
                    {
                        name:"user",
                        path:"/user"
                    },
                    {
                        name:"product",
                        path:"/product"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    a{
        display:inline-block;
        padding:5px 10px;
    }
</style>