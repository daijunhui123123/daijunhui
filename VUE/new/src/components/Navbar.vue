<template>
    <div Nav-container>
        <div class="Nav_top">
            <van-nav-bar title="标题">
                <template #right>
                    <van-icon name="search" size="18" @click="onClickLeft" />
                </template>
                <template #left>
                    <van-icon name="location" size="18" @click="onClickRight" />
                    <span>大雁塔</span>
                </template>
            </van-nav-bar>






        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const onClickLeft = () => {
    router.push({ path: '/search' })
}
const onClickRight = () => {
    router.push({ path: '/myself' })
}
</script>

<style lang="less" scoped>
.Nav_top {
    width: 100%;
    height: 40px;

    span {

        width: 42px;
        height: 21px;


        color: rgba(80, 80, 80, 1);
        font-size: 14px;



    }
}
</style>