<template>

    <div class="browse__container">

        <div class="browse__wrapper">
            <CustomFilter @categoryChange="categoryChange" @searchChange="searchChange" @resetFilter="resetFilter" :products="products" ></CustomFilter>
			<ProductsList :products="this.products"></ProductsList>
        </div>

    </div>

</template>

<script>

import CustomFilter from "@/components/Browse/Filter/Filter.vue"
import Featured from "@/components/Home/Featured/Featured.vue"
import ProductsList from '@/components/Browse/ProductsList/ProductsList.vue'

export default {
    name:"Browse",
	data() {
		return {
			filter: 'all',
			searchQuery: '',
			selectedCategory: this.$route.params.category,
		}
	},
	components: {
		CustomFilter, ProductsList,
	},
	computed: {
		products() {

			let products = this.$store.getters.products;
			let result = [];


			if(this.filter == 'all' || this.filter == '') {
				result = products;
			} else {
				result = products.filter((item) => item.category === this.filter);
			}

			if(['eye', 'lips', 'face'].indexOf(this.categoryInRoute) >= 0) {
				result = result.filter((item) => item.category.includes(this.categoryInRoute));
			}

			if(this.searchQuery.trim().length > 0) {
				result = result.filter((item) => {
					if(item.category.toLowerCase().includes(this.searchQuery) || item.title.toLowerCase().includes(this.searchQuery)) {
						return item;
					}
				})
			}

			return result;
		},
		categoryInRoute() {
			return this.$route.params.category;
		}
	},
	methods: {
		categoryChange(category) {
			this.filter = category;
		},
		searchChange(query) {
			// this.$store.dispatch("fetchProducts", query);
			this.searchQuery = query.toLowerCase();
		},
		resetFilter() {
			this.searchQuery = "";
			this.filter = "all";
			this.$router.replace('/browse');
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