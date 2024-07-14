<script>
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.vue';
import Loading from './components/Loading.vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
	name: 'App',
	components: {
		ScrollyVideo,
		Carousel,
		Slide,
		Loading,
		Navigation,
	},
	computed: {
		imgList() {
			return Array.from({ length: 20 }, (_, index) => `./assets/hongkong-${index + 1}.jpg`);
		},
	},
	data() {
		return {
			introList: [
				{
					text: '早於個人電腦及數碼字體普及前，店舖東主每當需要製作招牌，就得聘請書法家或「寫字佬」（寫招牌的人），將中文書法以勾線方式畫出。<br>其中以北魏體風格的招牌字在街道上非常流行，成為了一種香港民間特色',
					top: 15,
					left: 55,
				},
				{
					text: '霓虹招牌的製造技術早在上世紀三十年代引入香港，但直到了二戰後，香港經濟快速復甦，霓虹招牌才得以茁壯成長。<br>香港第一間霓虹燈製造廠設廠於 1932 年，霓虹招牌是推廣各種商業活動的不二之選，大量用於各行各業如餐廳、百貨公司、戲院、酒吧、夜總會、桑拿浴場等。',
					top: 30,
					left: 40,
				},
				{
					text: '雖然霓虹光管招牌是舶來品，但中國招牌的傳統卻得以保存，且融合到本土霓虹招牌的視覺語言中。放大了尺碼與跨張了的視覺效果，更能反映日新月異的城市肌理和建築特色。',
					top: 45,
					left: 20,
				},
				{
					text: '然而，香港霓虹燈確實正在逐漸減少中，5年內就有1.6萬個霓虹燈招牌因安全疑慮被迫熄燈，原因除了港府屋宇署修訂《建築物條例》針對招牌有詳細規定，這些舊招牌因為大小、位置等不合規定，屋宇署就曾在 2022 年表示，現需要拆除或修葺的危險及棄置招牌仍有 1,800 個。',
					top: 60,
					left: 50,
				},
				{
					text: '幸好，在人民的逐漸重視下，西九文化區視覺文化博物館M+正建立其霓虹招牌的館藏， 率先收藏了森美餐廳的「霓虹牛」及鷄記蔴雀館的「霓虹公鷄」，並推出其首個網上互動展覽 NEONSIGNS.HK 探索霓虹，以不同角度探索霓虹招牌，並邀請公眾上載霓虹照片至霓虹地圖。此外，也有民間團體藉由自身專業，去幫助商戶保留或修復這些傳統招牌，為稍縱即逝的文化留下記錄。',
					top: 75,
					left: 15,
				},
			],
			referList: [
				{
					text: 'NEON.HK 探索霓虹',
					url: 'https://www.neonsigns.hk/neon-in-visual-culture/mplus-collects-neon/',
				},
				{
					text: '光的風景:香港霓虹招牌的視覺語言與字形美學',
					url: 'https://www.eduhk.hk/include_n/getrichfile.php?key=55c4c2c5dd74cd7218a963ffeadeb429&secid=53373&filename=hkjss/Issue52/4_%E5%85%89%E7%9A%84%E9%A2%A8%E6%99%AF_%E9%A6%99%E6%B8%AF%E9%9C%93%E8%99%B9%E6%8B%9B%E7%89%8C%E7%9A%84%E8%A6%96%E8%A6%BA%E8%AA%9E%E8%A8%80%E8%88%87%E5%AD%97%E5%BD%A2%E7%BE%8E%E5%AD%B8.pdf',
				},
				{
					text: '《報導者The Reporter》用字體留住消逝的街景記憶──香港的野生造字人們',
					url: 'https://www.twreporter.org/a/never-forget-hong-kong-vanishing-street-and-font-designers',
				},
				{
					text: '老香港風味消失中？霓虹燈招牌拆或留成兩難，保存團拼修復',
					url: 'https://city.gvm.com.tw/article/107611',
				},
			],
			isDesktop: true,
			isLoading: true,
		};
	},
	mounted() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		this.isDesktop = window.innerWidth > 565;
	},
	methods: {
		getPicture(slide) {
			return require(`./assets/hongkong-${slide}.jpg`);
		},
		next() {
			this.$refs.carousel.next();
		},
		prev() {
			this.$refs.carousel.prev();
		},
		readyCallBack() {
			this.isLoading = false;
		},
	},
};
</script>

<template>
	<Loading v-if="isLoading"/>
	<Transition>
		<div v-show="!isLoading">
			<div class="header">
				<img
					src="../public/assets/hongkong-neon-light.jpg"
					alt="banner"
				>
				<p>
					Keith Macgregor, Neon Fantasy #1 Nathan Road, Kowloon, Hong Kong（2006） © Keith Macgregor
				</p>
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
				本身很喜歡香港的招牌跟霓虹燈，也希望這個文化被更多人看到，在這邊做一個簡單的介紹💫
			</div>
			<div id="video-body">
				<ScrollyVideo
					id="land-scap-video"
					:videoPercentage="0"
					src="./assets/hk-landscap.mp4"
					:onReady="readyCallBack"
				/>
				<div
					v-for="(item, index) in introList"
					:key="`desc-item${index}`"
					class="desc-item"
					:style="{
						top: `${item.top}%`,
						left: `${item.left}%`,
					}"
					data-aos="fade-up"
					data-aos-duration="1000"
					v-html="item.text"
				/>
			</div>
			<div class="live-photo">
				<div class="live-photo-header">
					<button @click="prev">
						<i class="arrow left" />
					</button>
					<p>
						下面是一些過去在香港旅遊時紀錄的招牌以及霓虹燈 📷
					</p>
					<button @click="next">
						<i class="arrow right" />
					</button>
				</div>
				<Carousel
					ref="carousel" 
					:items-to-show="isDesktop ? 3 : 1"
					:wrap-around="true"
				>
					<Slide
						v-for="(img, index) in imgList"
						:key="`picture-${index}`"
					>
						<img
							:src="img"
							alt="hong-kong-picture"
						>
					</Slide>
					<template #addons>
						<Navigation />
					</template>
				</Carousel>
				<div class="other">
					如果也喜歡招牌、霓虹燈的朋友，也歡迎到香港M+的<a href="https://www.neonsigns.hk/neon-in-visual-culture/mplus-collects-neon/" target="_blank">探索霓虹</a>網站，看看更多漂亮的霓虹招牌吧！✨
				</div>
				<div class="refer">
					<b>參考資料</b>
					<ul>
						<li
							v-for="(item, index) in referList"
							:key="`refer-item${index}`"
						>
							<a :href="item.url" target="_blank" alt="ref-text">
								{{ item.text }}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</Transition>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

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

	p {
		position: absolute;
		bottom: 12px;
		right: 12px;
		color: white;
		font-size: 12px;
	}

	.title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
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

.intro {
	padding: 40px;
	color: white;
}

#video-body {
	margin: 0;
	padding: 0;
	width: 100vw;
	height: 400vh;
	position: relative;

	.desc-item {
		max-width: 420px;
		position: absolute;
		padding: 24px 32px;
		background-color: rgba(0, 0, 0, .5);
		text-align: left;
		color: white;
	}
}

.live-photo {
	background: black;
	margin-top: 60px;

	.live-photo-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 60px;
		margin-bottom: 24px;

		button {
			width: 60px;
			height: 40px;
			border: 1px solid #ccc;
			background-color: transparent;
			color: white;

			.arrow {
				border: solid white;
				border-width: 0 4px 4px 0;
				display: inline-block;
				padding: 4px;
			}

			.right {
				transform: rotate(-45deg);
				-webkit-transform: rotate(-45deg);
			}

			.left {
				transform: rotate(135deg);
				-webkit-transform: rotate(135deg);
			}

			&:hover {
				background-color: rgba(255, 255, 255, .3);
			}

			&:focus {
				outline: 0;
				box-shadow: none;
			}
		}
		p {
			color: white;
		}
	}

	img {
		height: 400px;
		width: auto;
	}
}

.other {
	padding: 40px 0;
	color: white;
	font-weight: bold;

	a {
		color: white;
		text-decoration: underline;
	}
}

.refer {
	padding: 40px;
	text-align: left;

	* {
		text-align: left;
		color: #666;
	}
	ul {
		padding-left: 12px;
		margin: 0;
		font-size: 12px;

		li {
			:hover {
				color: #888;
			}
		}
	}
}
</style>
