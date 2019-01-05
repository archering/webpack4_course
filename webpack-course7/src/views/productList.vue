<template>
    <div>
        <h2>{{title}}</h2>
        <ul>
            <product-list-item v-for="(item,index) in list" :prod="item" :key="index"></product-list-item>
        </ul>
    </div>    
</template>

<script>
    import productListItem from './productListItem.vue';

    export default {
        name:"list",
        data:function(){
            return {

            }
        },
        props:["title","list"],
        components:{
            'product-list-item':productListItem
        }
    }
</script>

<style scoped>

</style>