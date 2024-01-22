<template>
    <div class="home_container">
        <Navbar />
        <Swipe />
        <div class="item-box">
            <div class="item" v-for="item in 6">
                <img src="" alt="">
                <span>123</span>
            </div>


        </div>
    </div>
</template>
   
<script setup>
import Navbar from '../components/Navbar.vue'
import Swipe from '../components/Swipe.vue';
</script>

<style lang="less" scoped>
.home_container {
    .item-box {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        /* 定义三列，每列宽度平分 */
        grid-gap: 10px;
        width: 100%;
        height: 200px;

        .item {
            margin-left: 25px;
            background: pink;
            width: 80px;
            height: 80px;
            border-image: auto;
        }
    }
}
</style>