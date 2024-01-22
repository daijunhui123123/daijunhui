<template>
	<view class="recommend-song">
		<view class="recommend-hd">
			<view class="title">推荐歌曲</view>
			<view class="more">
				<uni-icons type="right" size="16"></uni-icons>
			</view>
		</view>
		<swiper class="swiper-wrap">
			<swiper-item>
				<view class="swiper-item">
					<view class="song-item">
						<view class="song-detail">
							<view class="pic">
								<image src="../../static/logo.png" mode="aspectFill"></image>
							</view>
							<view class="desc">
								<view class="name">惊鸿一面</view>
								<view class="author">许嵩</view>
							</view>
						</view>
						<view class="mv iconfont icon-video"></view>
					</view>
					<view class="song-item">
						<view class="song-detail">
							<view class="pic">
								<image src="../../static/logo.png" mode="aspectFill"></image>
							</view>
							<view class="desc">
								<view class="name">惊鸿一面</view>
								<view class="author">许嵩</view>
							</view>
						</view>
						<view class="mv iconfont icon-video"></view>
					</view>
					<view class="song-item">
						<view class="song-detail">
							<view class="pic">
								<image src="../../static/logo.png" mode="aspectFill"></image>
							</view>
							<view class="desc">
								<view class="name">惊鸿一面</view>
								<view class="author">许嵩</view>
							</view>
						</view>
						<view class="mv iconfont icon-video"></view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="song-item">
						<view class="song-detail">
							<view class="pic">
								<image src="../../static/logo.png" mode="aspectFill"></image>
							</view>
							<view class="desc">
								<view class="name">惊鸿一面</view>
								<view class="author">许嵩</view>
							</view>
						</view>
						<view class="mv iconfont icon-video"></view>
					</view>
					<view class="song-item">
						<view class="song-detail">
							<view class="pic">
								<image src="../../static/logo.png" mode="aspectFill"></image>
							</view>
							<view class="desc">
								<view class="name">惊鸿一面</view>
								<view class="author">许嵩</view>
							</view>
						</view>
						<view class="mv iconfont icon-video"></view>
					</view>
					<view class="song-item">
						<view class="song-detail">
							<view class="pic">
								<image src="../../static/logo.png" mode="aspectFill"></image>
							</view>
							<view class="desc">
								<view class="name">惊鸿一面</view>
								<view class="author">许嵩</view>
							</view>
						</view>
						<view class="mv iconfont icon-video"></view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
const props=	defineProps({
		list:Array
	})
const swiperList = ref([])
onUpdated(() => {
	let arr = []
	props.list.forEach((item, i) => {
		if (arr.length === 3) {
			swiperList.value.push(arr)
			arr = []
		}
		arr.push(item)
	})
	console.log(swiperList.value, '------');
})
</script>

<style lang="scss">
.recommend-song{
	margin: 30rpx 0;
	.recommend-hd {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		font-weight: bold;
	}
	.swiper-item{
		padding-right: 30rpx;
		overflow: hidden;
		.song-item{
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			margin: 20rpx 0;
			.song-detail{
				display: flex;
				.pic{
					width: 100rpx;
					height: 100rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.desc{
					margin-left: 26rpx;
					line-height: 1.5;
					display: flex;
					flex-direction: column;
					justify-content: center;
					.author{
						font-size: 24rpx;
						color: #666;
					}
				}
			}
			
		}
	}
	:deep(.uni-swiper-slide-frame){
		width: 95% !important; 
	}
}
.swiper-wrap{
	height: 370rpx;
}
</style>