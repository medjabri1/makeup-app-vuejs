<template>

    <div class="browse__container">

        <div class="browse__wrapper">
            <CustomFilter @categoryChange="categoryChange"></CustomFilter>
			<ProductsList></ProductsList>
        </div>

    </div>

</template>

<script>

import CustomFilter from "@/components/Browse/Filter/Filter.vue"
import Featured from "@/components/Home/Featured/Featured.vue"
import ProductsList from '@/components/Browse/ProductsList/ProductsList.vue'

export default {
    name:"Browse",
	components: {
		CustomFilter, ProductsList,
	},
	methods: {
		categoryChange(category) {
			console.log(category);
		}
	}
}
</script>

<style lang="scss">

.browse__container {
	height: 100%;
	font-family: "Montserrat", sans-serif;

    .browse__wrapper {
		height:100%;
		width: 100%;
		max-width: 1200px;
		margin: 0px auto;
		box-shadow: 0px 0px 2px #00000033, 0px 0px 10px #00000033;
    }
}

</style>