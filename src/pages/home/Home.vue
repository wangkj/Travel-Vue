<template>
    <div> 
        <div class="home">home</div>
        <router-link to="/list" class="home">列表</router-link>
    </div>
   
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
    .home{
        font-size: 20px
    }
</style>
