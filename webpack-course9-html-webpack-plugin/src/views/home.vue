<template>
    <div>
            <h3>{{title}}</h3>
            <img src="../assets/1.jpg" />
    </div>    
</template>

<script>
    export default {
        name:"home",
        data:function(){
            return {
                title:"this is from home page"
            }
        }
    }
</script>

<style scoped>
    img{
        border-radius: 100%;
        width: 200px;
        height: 200px;
        border:1px solid black;
        box-shadow: 0 2px 10px black;
    }
</style>