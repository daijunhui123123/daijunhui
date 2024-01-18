<template>
    <div Nav-container>
        <div class="Nav_top">
            <van-nav-bar title="首页" left-text="返回" right-text="" left-arrow @click-left="onClickLeft"
                @click-right="onClickRight">
                <template #left>
                    <van-icon name="search" size="18" />
                </template>

                <template #right>
                    <van-icon name="user-o" size="18" />
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