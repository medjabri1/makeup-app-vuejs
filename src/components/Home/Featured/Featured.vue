<template>
    <div class="featured__container">
        <div class="featured__wrapper">
            <h1 class="section__title">Featured Products</h1>
            <div class="featured__content">
                <card :product="{'image': 'lip-gloss-1.jpg'}"></card>
                <card :product="{'image': 'lipstick-1.jpg'}"></card>
                <card :product="{'image': 'brushes-1.jpg'}"></card>
                <card :product="{'image': 'brushes-2.jpg'}"></card>
            </div>
            <router-link to="/browse" class="button see-all">See All Products</router-link>
        </div>
    </div>
</template>

<script>

import Card from "@/components/Card.vue"

export default {
    name: 'Featured',
    components: {
		Card
	}

}
</script>

<style lang="scss" scoped>

.featured__container {
    height: 100%;
    background-color: var(--custom-color-dark-1);
    color: var(--custom-color-light-1);
    font-family: 'Nunito', sans-serif;
	box-shadow: 0px 0px 2px #ffffff22, 0px 0px 10px #ffffff22;

    .featured__wrapper {
        width: 100%;
		max-width: 1200px;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0px auto;
		padding: 80px 10px;
        overflow: hidden;

        .section__title {
            color: var(--custom-color-light-1);
            font-family: 'Great Vibes', cursive;
            letter-spacing: 1px;
            font-size: 2.2rem;
            font-weight: 500;
        }

        

        .button.see-all{
            color: inherit;
            padding: 10px 20px;
            border: 2px solid var(--custom-color-light-1);
            background-color: var(--custom-color-dark-3);
            text-decoration: none;
            margin-top: 20px;
            transition: all 200ms ease-in-out;

            &:hover {
                opacity: .8;
            }
        } 

        .featured__content {
            margin: 20px;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }
    }

}

@media screen and (max-width:1000px) {

    .featured__content {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media screen and (max-width:600px) {

    .featured__content {
        grid-template-columns: repeat(1, 1fr) !important;
    }
}

</style>