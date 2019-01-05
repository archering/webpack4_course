<template>
    <li>
        <h4>{{prod.name}}</h4>
        <div>{{prod.desc}}</div>
    </li>    
</template>

<script>
    export default {
        name:"item",
        data:function(){
            return {
                
            }
        },
        props:["prod"]
    }
</script>

<style scoped>
    li{
        position: relative;
        padding:10px;
        border:1px solid #ccc;
    }
</style>