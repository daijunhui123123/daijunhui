<template>
    <div class="myself-container">
        <div class="top-icon">
            <div class="information"><van-icon name="chat" size="24" /></div>
            <div class="intall"><van-icon name="setting" size="24" /></div>
        </div>
        <div class="mydec">
            <div class="mypic">
                <img src="#" alt="">
            </div>
            <div class="myname">我的账号昵称</div>
            <div class="describe">
                <div class="follow">
                    <span>我的关注</span>
                    <span>98人</span>
                </div>
                <div class="follow">
                    <span>我的粉丝</span>
                    <span>98人</span>
                </div>
                <div class="follow">
                    <span>我的发布</span>
                    <span>98</span>
                </div>
            </div>
        </div>
        <div class="my-order">
            <div class="service-order">
                服务订单
            </div>
            <div class="service-order">
                商城订单
            </div>
        </div>
        <div class="my-list">
            <div class="pet" v-for="item in 6">
                <div class="icon">

                </div>
                <span>我的宠物</span>
            </div>
        </div>


        <Footbar />
    </div>
</template>

<script setup>
import Footbar from '@/components/Footbar.vue';
</script>

<style lang="less" scoped>
.myself-container {
    margin-top: 20px;

    .top-icon {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 25px;
        right: 16px;
        width: 65px;
        height: 24px;
    }

    .mydec {

        padding-top: 63px;

        .mypic {
            margin: 0 auto;
            width: 99px;
            height: 99px;
            border-radius: 50%;
            background-color: pink;
        }

        .myname {
            margin: 0 auto;
            text-align: center;
            line-height: 25px;
            margin-top: 15px;
            width: 85px;
            height: 25px;

        }

        .describe {
            margin-top: 22px;
            display: flex;
            justify-content: space-around;

            .follow {
                background-color: #fff;
                width: 82px;
                height: 44px;
                color: rgba(56, 56, 56, 1);
                font-size: 14px;
                line-height: 150%;
                text-align: center;

                span {
                    display: block;
                }
            }
        }

    }

    .my-order {
        margin: 15px 6px;
        display: flex;

        .service-order {
            width: 182px;
            height: 35px;
            color: rgba(56, 56, 56, 1);
            background-color: rgba(217, 217, 217, 1);
            border-radius: 5px;
            font-size: 16px;
            line-height: 35px;
            border: rgba(166, 166, 166, 1) solid 1px;
            text-align: center;
        }

    }

    .my-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        padding: 0 40px;

        .pet {
            text-align: center;
            margin: 0 auto;
            width: 80px;
            height: 80px;

            .icon {
                margin-top: 10px;
                margin: 10px auto;
                width: 40px;
                height: 40px;
                background-color: pink;
                border-radius: 50%;
            }

            span {
                color: rgba(56, 56, 56, 1);
                font-size: 14px;
            }


        }
    }

}
</style>