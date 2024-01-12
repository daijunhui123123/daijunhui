<template>
  <div class="cart-box">
    <SimpleHeader title="购物车" :back="false" />
    <div class="cart-body">
      <van-checkbox-group v-model="result" @change="groupChange">
        <van-swipe-cell v-for="(item, index) of list" :key="index">
          <van-checkbox :name="item.cartItemId"></van-checkbox>
          <van-card :num="item.goodsCount" :price="item.sllingPrice" :title="item.goodsName" class="goods-card"
            :thumb="item.goodsCoverImg">

            <template #footer>
              <van-stepper v-model="item.goodsCount" max="5" @change="numChange" :name="item.cartItemId" />
            </template>
          </van-card>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="deleteGoods(item.cartItemId)" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>

    </div>
    <!-- submitbar -->

    <van-submit-bar :price="totalPrice * 100" button-text="提交订单" @submit="onSubmit" class="submitbar">
      <van-checkbox v-model="checkAll" class="checkAll" @click="allCheck">全选</van-checkbox>

    </van-submit-bar>



    <NavBar />

  </div>
</template>

<script setup>
import { getCart, modifyCart, deleteCart } from '@/api/Cart.js';
import NavBar from '../components/NavBar.vue';
import SimpleHeader from '../components/SimpleHeader.vue';
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
const checkAll = ref(false)
const result = ref([]);
const list = ref([]);
const store = useStore();
onMounted(() => {
  init()
})

const init = async () => {
  const { data } = await getCart({ pageNumber: 1 })
  console.log(data);
  // checkAll.value = data.length > 0 ? true : false;
  list.value = data;
  result.value = data.map(item => item.cartItemId)
}
const groupChange = () => {   //选中商品
  console.log(result.value);
  checkAll.value = (result.value.length === list.value.length) && result.value.length > 0 ? true : false;
}
const numChange = async (value, detail) => {  // 修改数量
  // console.log(value, detail)
  const params = {
    cartItemId: detail.name,
    goodsCount: value
  }
  await modifyCart(params)

}
const onSubmit = () => {  // 提交订单

}
const totalPrice = computed(() => {  //  计算属性中的依赖变量有变动时
  // return list.value.reduce((sum,item)=>{
  //   return sum+item.goodsCount*item.sellingPrice
  // },0)
  let sum = 0;

  let _list = list.value.filter((item) => result.value.includes(item.cartItemId))
  console.log(_list);
  const allPrice = _list.reduce(
    (pre, item, index, arr) => { return pre += item.goodsCount * item.sellingPrice },
    0
  );
  console.log(allPrice);
  return allPrice;


})
const allCheck = () => {
  if (!checkAll.value)//大家都不选中
  {
    result.value = []
  } else {
    result.value = list.value.map(item => item.cartItemId)
  }
}
const deleteGoods = async (id) => {
  await deleteCart(id)
  init()
  store.dispatch('setCartCountAction')
}


</script>

<style lang="less" scoped>
.cart-body {
  margin: 16px 0 100px 0;
  padding-left: 10px;
}

.submitbar {
  bottom: 50px;
}
</style>
<style>
.van-swipe-cell__wrapper {
  display: flex;
}

.van-card.goods-card {
  width: 100%;
  background-color: #fff;
}

.van-checkbox {
  width: 23px;
}

.delete-button {
  height: 100%;
}

.van-card__footer {
  position: absolute;
  right: 16px;
  bottom: 8px;
}

.van-card__num {
  position: absolute;
  right: 0px;
  top: 0;

}

.checkAll {
  width: 60px;

}
</style>