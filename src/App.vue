<script setup>
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.vue';
</script>


<template>
	<div class="header">
		<img src="./assets/hongkong-neon-light.jpg" alt="">
		<div class="mask" />
		<div class="title">
			<h1 class="neon-text">
				HONG KONG
			</h1>
			<h2 class="neon-text">
				NEON CITY
			</h2>
		</div>
	</div>
	<div class="intro">
		本身很喜歡香港的招牌，也很希望這個文化被更多人看到，在這邊做一個簡單的介紹
		<div>
			影片資料來源參考
			<a href="https://www.twreporter.org/a/never-forget-hong-kong-vanishing-street-and-font-designers">
				《報導者The Reporter》
			</a>
		</div>
	</div>
	<div id="app-index">
		<ScrollyVideo
			id="land-scap-video"
			:videoPercentage="0"
			src="https://story-telling-storage.twreporter.org/files/hk-font-0626-landscape-lJME8N0znScoICcvjdc.mp4"
		/>
	</div>
</template>

<style lang="scss" scoped>
.header {
	position: relative;

	img {
		height: 100vh;
		object-fit: cover;
		width: 100vw;
	}

	.mask {
		height: 100vh;
		width: 100vw;
		position: absolute;
		background-color: black;
		opacity: .6;
		top: 0;
		left: 0;
	}

	.title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.neon-text {
		color: #fff;
		text-shadow:
			0 0 7px #f9c3ef,
			0 0 10px #f9c3ef,
			0 0 21px #f9c3ef,
			0 0 42px rgb(255, 0, 102),
			0 0 82px rgb(255, 0, 102),
			0 0 92px rgb(255, 0, 102),
			0 0 102px rgb(255, 0, 102),
			0 0 151px rgb(255, 0, 102);
	}

}

.intro {
	background-color: white;
	padding: 40px;

	a {
		color: black;
	}
}
#app-index {
	margin: 0;
	padding: 0;
	width: 100vw;
	height: 400vh;
}
</style>
