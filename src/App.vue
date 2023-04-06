<template>
	<div id="app">
		<Header></Header>
		<router-view />
		<Footer></Footer>
	</div>
</template>

<script lang="ts">

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

import axios from "axios";

export default {
    name: 'HomeView',
    components: {
		Header, Footer
	},
	created() {
		this.$store.dispatch("fetchProducts");
		// this.$store.dispatch("fetchCartItems");
		this.$store.dispatch("logState");
	},
}

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html, body {
	height: 100%;
	width: 100%;
    background-color: var(--custom-color-light-1);
}

:root {
	// DARK COLORS
	--custom-color-dark-1: #020202;
	--custom-color-dark-2: #161616;
	--custom-color-dark-3: #232323;
	
	// LIGHT COLORS
	--custom-color-light-1: #FaFaFa;
	--custom-color-light-2: #F0F0F0;
	--custom-color-light-3: #E0E0E0;
	
}

#app {
	width: 100%;
    background-color: var(--custom-color-dark-1);
}

</style>
