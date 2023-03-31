<template>
	<div class="home__container">
		<div class="home__wrapper">

			<swiper></swiper>

		</div>
	</div>
</template>

<script>
import { register } from "swiper/element/bundle";
register();

import Swiper from "@/components/Home/Swiper/Swiper.vue"

export default {
	name: "HomeView",
	components: {
		Swiper
	},
};
</script>

<style lang="scss">
.home__container {
	height: 100%;
	font-family: "Montserrat", sans-serif;

	.home__wrapper {
		height: 100%;
		width: 100%;
		max-width: 2000px;
		margin: 0px auto;
		box-shadow: 0px 0px 2px #00000033, 0px 0px 10px #00000033;

		
	}
}
</style>
