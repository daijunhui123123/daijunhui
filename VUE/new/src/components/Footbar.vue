<template>
    <div class="footBar">
        <van-tabbar v-model="active" active-color="#ee0a24" route="true">
            <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item replace to="/mall" icon="cart">商城</van-tabbar-item>
            <van-tabbar-item replace to="/petcircle" icon="friends">萌友圈</van-tabbar-item>
            <van-tabbar-item replace to="/myself" icon="user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>