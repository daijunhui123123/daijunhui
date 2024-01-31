<template>
    <div class="product">
        <div class="top-title">
            {{ title }}
        </div>
        <div class="item" v-for="item in 2">
            <div class="pic">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: String
});
</script>

<style lang="less" scoped>
.product {
    .top-title {
        margin: 20px auto;
        width: 169px;
        height: 32px;
        color: rgba(255, 255, 255, 1);
        background-color: rgba(153, 153, 153, 1);
        font-size: 15px;
        line-height: 32px;
        text-align: center;
        font-family: Microsoft YaHei;
        font-weight: bold;
    }

    .item {
        width: 50%;
        height: 150px;
        background-color: pink;

        img {
            width: 50%;
            height: 150px;
        }
    }
}
</style>