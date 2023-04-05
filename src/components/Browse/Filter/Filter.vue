<template>

    <div class="filter__container">
        <div class="filter__wrapper">
            <h1 class="filter__title">Filter Products</h1>
            <div class="search__input">
                <input :value="searchQuery" type="text" placeholder="Search items" @input="(e) => onChange(e)">
            </div>
            <div class="filter__categories">
                <h2 
                    class="category__item" 
                    v-for="(category, index) in categories" 
                    :key="index"
                    :class="{'active': index == selectedIndex}"
                    @click="selectCategory(index)"
                >
                    <span class="category__name">{{ category.category }}</span>
                    <span class="count">{{ category.count }}</span>
                </h2>
            </div>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'CustomFilter',
	data() {
		return {
            selectedIndex: 0,
            length: 0,
            searchQuery: ''
		}
	},
    computed: {
        products() {
            return this.$store.getters.products;
        },
        categories() {
            let result = [];
            let found = [];
            let categories__arr = [];

            this.$store.getters.products.map((item) => {
                categories__arr.push(item);
            });
            
            result.push({ category: 'all', count: categories__arr.length})

            let count = 0;
            categories__arr.map((category) => {
                if(found.indexOf(category.category) < 0) {
                    result.push({ index: count, category: category.category, count: categories__arr.filter((item) => item.category == category.category).length })
                    found.push(category.category);
                    count++;
                }
            });
            return result;
        }
    },
    methods: {
        selectCategory(index) {
            this.selectedIndex = index;
            this.$emit('categoryChange', this.categories[index]['category']);
        },
        onChange(e) {
            this.searchQuery = e.target.value;
            this.$emit('searchChange', this.searchQuery);
        }
    }
}
</script>

<style lang="scss" scoped>

.filter__container {
    height: fit-content;
    background-color: var(--custom-color-dark-1);
    color: var(--custom-color-light-1);
    font-family: 'Nunito', sans-serif;
    padding-top: 100px;

    .filter__wrapper {
		width: 100%;
		max-width: 800px;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		margin: 0px auto;
		padding: 40px 10px;
        overflow: hidden;

        .filter__title {
            font-size: 1.3rem;
            font-weight: 500;
        }

        .search__input {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0px;

            input {
                width: 100%;
                padding: 8px;
                font-size: .9rem;
                outline: none;
                border: none;
                border: 2px solid var(--custom-color-light-3);
                border-radius: 3px;
                font-family: 'Nunito', sans-serif;
            }
        }

        .filter__categories {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;

            .category__item {
                width: 100%;
                text-align: center;
                background-color: var(--custom-color-dark-2);
                padding: 10px;
                font-size: 1rem;
                border: 2px solid var(--custom-color-dark-3);
                font-weight: 500;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: space-between;
                opacity: .8;
                border-radius: 3px;
                user-select: none;

                .category__name {
                    text-transform: capitalize;
                }

                .count {
                    opacity: .2;
                    font-size: .8rem;
                }

                &:hover {
                    opacity: .6;
                }
                
                &.active {
                    opacity: 1;
                    border: 2px solid #FFFFFF55;
                }
            }
        }
    }

}


@media screen and (max-width:1000px) {

    .filter__categories {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media screen and (max-width:600px) {

    .filter__categories {
        grid-template-columns: repeat(1, 1fr) !important;
    }
}


</style>