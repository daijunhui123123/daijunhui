<template>
	<view>about page</view>
	<view class="btn">
		<button type="default"> 按钮  </button>
		<view class=""></view>
	</view>
</template>

<script  setup>
import { onMounted } from 'vue';
   onMounted(  ()=>{
	 const reqTask=  uni.request({
	   	url:'https://mock.mengxuegu.com/mock/65a91543c4cd67421b34c898/movie/movieList',
		method: 'GET',
		success:(res)=>{
			console.log(res)
			uni.setStorage({
				key:'moviename',
				data: res.data.movieList[0].nm,
				success() {
					uni.showToast({
						title:'保存成功',
						duration:2000,
						icon:'success'
					})
				}
			})
			
		}
	   })
	   reqTask.abort();
   })
</script>
// 
<style lang="scss">
   .btn{
	     button {
		width: 750rpx;//  rpx  根据屏幕宽度指定的  响应是单位   
		 }
   }
</style>
