<template>
    <div Nav-container>
        <div class="Nav_top">
            <van-nav-bar title="标题">
                <template #right>
                    <van-icon name="search" size="18" @click="onClickLeft" />
                </template>
                <template #left>
                    <van-icon name="location" size="18" @click="onClickRight" />
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

<style lang="scss" scoped></style>