<template>
    <div class="mall-container">
        <div class="search">
            <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
            <div class="icon">
                <div class="todo-list"><van-icon name="todo-list" size="24" @click="onList" /></div>
                <div class="cart"><van-icon name="cart" size="24" @click="onCart" /></div>
            </div>



        </div>
        <div class="swiper">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>

        </div>
        <div class="voucher">
            <div class="title">
                领取优惠券
            </div>
            <div class="voucher">
                <div class="item" v-for="item in 3">满100减20</div>
            </div>
        </div>
        <div class="product-list">
            <div class="list" v-for="item  in 8" @click="goList">
                <div class="img">
                    <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
                </div>
                <div class="name">
                    玩具
                </div>
            </div>

        </div>

        <div class="Recharge-money">
            充值下单更优惠
        </div>
        <product title="热卖专区" />
        <product title="新品专区" />
        <product title="为你推荐" />
        <Footbar />
    </div>
</template>

<script setup>
import Footbar from '@/components/Footbar.vue'
import product from '@/components/product.vue'
import { showToast } from 'vant';
const goList = () => { //跳转列表页
    showToast('还未开发');
}  
</script>

<style lang="less" scoped>
.mall-container {
    margin: 0 14px;

    .search {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 54px;
    }

    .icon {
        overflow: hidden;
        padding-left: 10px;
        width: 80px;
        height: 54px;


        .todo-list {

            float: left;
            height: 54px;
            width: 40px;
            line-height: 54px;
            font-size: 24px;


        }

        .cart {
            float: right;
            height: 54px;
            width: 40px;
            line-height: 54px;
            font-size: 24px;

        }
    }

    .swiper {
        margin-top: 10px;

        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            background-color: #39a9ed;
        }
    }

    .voucher {
        margin: 20px 0;

        .title {
            width: 124px;
            height: 34px;
            color: rgba(56, 56, 56, 1);
            line-height: 34px;
            font-size: 16px;
        }

        .voucher {
            display: flex;
            justify-content: space-between;

            .item {
                width: 94px;
                height: 32px;
                color: rgba(255, 255, 255, 1);
                background-color: rgba(153, 153, 153, 1);
                font-size: 14px;
                line-height: 32px;
                text-align: center;
            }
        }
    }

    .product-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        .list {
            margin-top: 10px;
            width: 80px;
            height: 80px;

            .img {
                margin: 0 auto;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 50px;
                    height: 50px;

                }
            }

            .name {
                text-align: center;
                margin: 5px auto;

                width: 56px;
                height: 21px;
                color: rgba(56, 56, 56, 1);
                font-size: 14px;


            }
        }
    }

    .Recharge-money {
        width: 346px;
        height: 36px;
        color: rgba(255, 255, 255, 1);
        background-color: rgba(153, 153, 153, 1);
        font-size: 15px;
        line-height: 36px;
        text-align: center;
        border-radius: 18px;
    }




}
</style>