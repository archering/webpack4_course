<template>
    <product-list :list="products" :title="title"></product-list>
</template>

<script>
    import productList from './productList.vue';

    export default {
        name:"app",
        data:function(){
            return {
                title:"shopping mall",
                products:[
                    {
                        name:"t-shirt1",
                        desc:"man t-shirt 1"
                    },
                    {
                        name:"t-shirt2",
                        desc:"man t-shirt 2"
                    }                    
                ]
            }
        },
        components:{
            'product-list':productList
        }
    }
</script>