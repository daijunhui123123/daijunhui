<template>
    <div class="home_container">
        <Navbar />
        <Swipe />
        <div class="item-box">
            <div class="item" v-for="item in 6" @click="goFosterCare">
                <div class="item-pic">
                    <img src="#" alt="">
                </div>
                <span>你好</span>
            </div>

        </div>
        <div class="hot-video">
            <h3>热门视频</h3>
            <div class="video-box">
                <div class="video-item">
                    <video src="video.mp4" controls autoplay loop width="349px" height="180px">

                    </video>
                </div>
                <div class="video-dec">
                    <div class="pic">
                        <img src="#" alt="">
                        <span class="author">XXX</span>
                        <span class="data">1000</span>
                    </div>



                    <div class="fllow">
                        <button>关注</button>
                    </div>
                </div>
            </div>
        </div>
        <Footbar />
    </div>
</template>
   
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import Navbar from '../components/Navbar.vue'
import Swipe from '../components/Swipe.vue';
import Footbar from '@/components/Footbar.vue';
const goFosterCare = () => {
    // 跳转到寄养页面
    // 这里需要使用路由导航的API
    // 例如：this.$router.push('/fostercare')
    router.push({ path: '/fostercare', query: { id: id } })
}
</script>

<style lang="less" scoped>
.home_container {
    .item-box {
        box-sizing: border-box;
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        /* 定义三列，每列宽度平分 */
        grid-gap: 10px; // 列与列之间的间距为10px
        width: 100%;
        height: 200px;
        padding: 0 20px;

        .item {
            margin: 0 auto;
            background: pink;
            width: 80px;
            height: 100px;
            border-image: auto;

            .item-pic {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background-color: black;
            }

            span {
                display: block;
                width: 80px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                background-color: #fff;
            }

        }
    }

    .hot-video {
        margin-top: 40px;

        h3 {
            font-size: 18px;
            margin-bottom: 10px;
            margin-left: 10px;
        }

        video {
            margin: 0 13px;
        }

        .video-dec {

            /* 设置为浮动，使其在一行显示 */
            display: flex;
            justify-content: space-between;
            margin: 10px;

            background-color: pink;

            img {
                width: 66px;
                height: 66px;
                background-color: #fff;
            }



        }

    }
}
</style>