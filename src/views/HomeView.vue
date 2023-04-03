<template>
	<div class="home__container">
		<div class="home__wrapper">

			<swiper></swiper>
			<about></about>
			<featured></featured>

		</div>
	</div>
</template>

<script>
import { register } from "swiper/element/bundle";
register();

import Swiper from "@/components/Home/Swiper/Swiper.vue"
import About from "@/components/Home/About/About.vue"
import Featured from "@/components/Home/Featured/Featured.vue"

export default {
	name: "HomeView",
	components: {
		Swiper, About, Featured
	},
};
</script>

<style lang="scss">
.home__container {
	height: 100%;
	font-family: "Montserrat", sans-serif;

	.home__wrapper {
		height:100%;
		width: 100%;
		max-width: 2000px;
		margin: 0px auto;
		box-shadow: 0px 0px 2px #00000033, 0px 0px 10px #00000033;
		
	}
}
</style>
